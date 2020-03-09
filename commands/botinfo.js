const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("Bot Informatie")
        .addField("Bot Naam", bot.user.username)
        .setThumbnail(botIcon)
        .addField("Gemaakt op:", bot.user.createdAt)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
        .setColor('#009999');

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}