const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var member = message.member.user.tag;
    
    var botEmbed = new discord.RichEmbed()
        .setTitle("**Avatar**")
        .setImage(message.author.displayAvatarURL)
        .setFooter('PredatorDesigns | Made by Outlandz', 'https://imgur.com/a/EgRCeTh') .setTimestamp()
        .setColor('#009999');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "avatar"
}