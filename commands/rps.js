const discord = require("discord.js");
const promptMessage = require("../../functions.js");

var chooseArr = ["🗻", "📰", "✂"];

    run: async (client, message, args) => {
        var embed = new RichEmbed()
            .setColor("#ffffff")
            .setTitle("Steen, Papier, Schaar")
            .setDescription("Druk op een emoij om de game te spelen!!")
            .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()

        var m = await message.channel.send(embed);
        var reacted = await promptMessage(m, message.author, 30, chooseArr);

        var botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        var result = await getResult(reacted, botChoice);
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

module.exports.help = {
    name: "rps"
}
