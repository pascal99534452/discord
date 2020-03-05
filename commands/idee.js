const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Vang het idee op.
    var idee = args.join(" ");
 
    // Kijk na als er een idee is meegegeven.
    if (!idee) return message.channel.send(":no_entry: | Geen Idee meegegeven gelieve een idee mee te geven.");
 
    // Maak het embed aan.
    var ideeEmbed = new discord.RichEmbed()
        .setTitle("Suggestie")
        .setColor("#00FF00")
        .addField("Idee:", idee)
        .addField("Ingezonden door:", message.author)
        .setColor('#009999')
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp();
 
    // Vind het kanaal.
    var ideeChannel = message.guild.channels.find(`name`, "idee");
    if (!ideeChannel) return message.guild.send("Kan het kanaal niet vinden");
 
    // Verzend het bericht en voeg er reacties aan toe.
    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');
    });
 
    // Einde.
 
}

module.exports.help = {
name: "idee"
}