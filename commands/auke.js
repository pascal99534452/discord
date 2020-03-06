const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("AUKUHH")
        .setDescription("Auke is gay :) \n @Cloqed#9955")
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 
        .setColor('#009999');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "auke"
}