const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if (!banUser) return message.channel.send(":no_entry: | Voer alle argumenten in!")

    var reason = args.join(" ").slice(22);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: | Jij hebt geen toegang tot dit commando!");


    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: | Jij kan geen staffleden verbannen!");

    var bann = message.channel.send("Je hebt " + banUser + " Gebanned.")

    var ban = new discord.RichEmbed()
        .setTitle("Ban Systeem")
        .setColor("#009999")
        .addField("Speler:", banUser)
        .addField("Gebanned door:", message.author)
        .addField("Reden:", reason)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp();

    var banChannel = message.guild.channels.find(`name`, "⛔・logs");
    if (!banChannel) return message.guild.send("Kan het kanaal niet vinden! :frowning:")

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban, bann)

    return;
}

module.exports.help = {
    name: "ban"
}