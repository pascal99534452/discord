const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setColor('#009999')
        .setTitle("Memes! :joy:")
        .setImage(`https://apis.duncte123.me/meme`)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "meme"
}