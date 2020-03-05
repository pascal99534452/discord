const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var KickUser = message.guild.member(message.mentions.users.first() || message.guild.member(arguments[0]));

    if(!KickUser) return message.channel.send(":no_entry: | Voer alle argumenten in!")

    var reason = args.join(" ").slice(22);
    message.channel.send("Je hebt " + KickUser + " Gekicked.")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: | Jij hebt geen toegang tot dit commando!");

    if(KickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: | Jij kan geen staffleden verwijderen!");
    
    var kick = new discord.RichEmbed()
    .setTitle("Kick Systeem")
    .setColor("#009999")
    .addField("Speler:", KickUser)
    .addField("Gekicked door:", message.author)
    .addField("Reden:", reason)
    .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp();

    var kickChannel = message.guild.channels.find(`name`, "logs");
    if (!kickChannel) return message.guild.send("Kan het kanaal niet vinden! :frowning:")

    message.guild.member(KickUser).kick(reason);

    kickChannel.send(kick)

    return;
}

module.exports.help = {
name: "kick"
}