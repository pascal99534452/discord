const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(":no_entry: | Jij hebt geen toegang tot dit commando!");

    var splitser = "/";

    if (args[0] == null) {

        var useMessage = new discord.RichEmbed()
            .setTitle("Melding Help")
            .setColor("##009999")
            .setDescription(`Om een melding te maken voer je het volgende uit: \n !melding Titel ${splitser} Bericht ${splitser} Kleur ${splitser} Kanaal`)
            .setColor('#009999')
            .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp();

        return message.channel.send(useMessage);
    }

    args = args.join(" ").split(splitser);

    if (args[2] == undefined) args[2] = "#009999"
    if (args[3] == undefined) args[3] = "idee"

    var options = {

      titel: args[0] || "Melding",
      bericht: args[1] || "Geen inhoud opgegeven.",
      kleur: args[2].trim(),
      kanaal: args[3].trim()

    }

    var announcer = message.author;

    var announcementEmbed = new discord.RichEmbed()
    .setTitle(`${options.titel}`)
    .setColor(options.kleur)
    .setDescription(`${options.bericht}`)
    .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp();

    var announcementChannel = message.guild.channels.find(`name`, options.kanaal);
    if (!announcementChannel) return message.channel.send("Ik kan het kanaal niet vinden! :frowning:")

    announcementChannel.send(announcementEmbed);

}

module.exports.help = {
name: "melding"
}