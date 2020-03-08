const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    function doMagic8BallVoodoo() {
        var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep'];
    
        return rand[Math.floor(Math.random()*rand.length)];
    }
    let question = arguments.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle("8Ball")
    .setColor('#009999')
    .addField("Vraag:", question)
    .addField("Antwoord:", doMagic8BallVoodoo())
    .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 

    message.channel.send(embed);

}

module.exports.help = {
name: "8ball"
}