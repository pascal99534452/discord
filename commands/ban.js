const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banChannel = message.guild.channels.find(`name`, "⛔・logs");
    let member = message.mentions.members.first();
    var message = new discord.RichEmbed()
        .setTitle("Ban Systeem")
        .setColor("#009999")
        .addField("Speler:", member)
        .addField("Gebanned door:", message.author)
        .addField("Reden:", reason)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp();

    var bann = new discord.RichEmbed()
        .setTitle("Ban Systeem")
        .setColor("#009999")
        .addField("Speler:", member)
        .addField("Gebanned door:", message.author)
        .addField("Reden:", reason)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp();

    if (member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: | Jij kan geen staffleden verbannen!");
    if (!member)
        return message.reply(":no_entry: | Voer alle argumenten in!");
    if (!member.bannable)
        return message.reply(":no_entry: | Ik kan deze persoon niet verbannen");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Geen reden gevonden";

    await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author}, Er is een error gevonden: ${error}`));
    message.channel.send(message)
    banChannel.send(bann)
}

module.exports.help = {
    name: "ban"
}