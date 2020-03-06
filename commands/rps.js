const { RichEmbed } = require("discord.js");
const { promptMessage } = require("../../functions.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "fun",
    description: "Rock Paper Scissors game. React to one of the emojis to play the game.",
    usage: "rps",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setTitle("Steen, Papier, Schaar")
            .setDescription("Druk op een emoij om de game te spelen!!")
            .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                return "Jij hebt gewonnen! :frowning:";
            } else if (me === clientChosen) {
                return "Het is gelijkspel! :slight_smile:";
            } else {
                return "Je hebt verloren! :slight_smile:";
            }
        }
    }
}