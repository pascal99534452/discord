const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var banChannel = message.guild.channels.find(`name`, "⛔・logs");
    let member = message.mentions.members.first();

    if (!message.member.roles.some(r => ["💼 ・Beheerder", "", "", ""].includes(r.name)))
        return message.reply(":no_entry: | Jij hebt geen toegang tot dit commando!");
    if (!member)
        return message.reply(":no_entry: | Je moet wel een speler kiezen die je wilt verbannen!");
    if (!member.bannable)
        return message.reply(":no_entry: | Jij kan geen staffleden verbannen!");

    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Geen reden gevonden";

    await member.ban(reason)
        .catch(error => message.reply(`Sorry ${message.author} Ik kan deze persoon niet bannen: ${error}`));
    message.reply(`**STAFF** ・ ${member.user.tag} is verbannen door: ${message.author.tag} voor: ${reason}`);

    var bann = new discord.RichEmbed()
        .setTitle("Ban Systeem")
        .setColor("#009999")
        .addField("Speler:", member)
        .addField("Gebanned door:", message.author)
        .addField("Reden:", reason)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp();

    banChannel.send(bann)
}

module.exports.help = {
    name: "ban"
}