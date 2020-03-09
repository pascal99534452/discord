const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
    .setColor("#009999")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
    .addField("**Server Naam:**", `${message.guild.name}`, true)
    .addField("**Server Eigenaar:**", `${message.guild.owner}`, true)
    .addField("**Aantal Leden:**", `${message.guild.memberCount}`, true)
    .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "serverinfo"
}