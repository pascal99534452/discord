const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var botEmbed = new discord.RichEmbed()
        .setTitle('**AUKUHH**')
        .setDescription('Auke stinkt')
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
        .setColor('#009999');

    message.channel.send(botEmbed);

}

module.exports.help = {
    name: "auke"
}