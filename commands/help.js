const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    var botIcon = bot.user.displayAvatarURL

    var botEmbed = new discord.RichEmbed()
        .setTitle("Help - UnitedMC")
        .setDescription("**!members** - Laat het aantal server leden zien! \n **!ip** - Laat het minecraft ip zien! \n **!botinfo** - Laat informatie zien van de bot! \n **!auke** - Command voor de lol haha! \n **!ban** - Verban een gebruiker! \n **!kick** - Verwijder een gebruiker! \n **!warn** - Waarschuw een gebruiker! \n **!ticket** - Maak een prive kanaal aan met staffleden! \n **!close** - Sluit een ticket! \n **!serverinfo** - Laat informatie zien van de discord server! \n **!avatar** - Laat je discord profiel foto zien! \n **!idee** - Plaat een idee! \n **!clear** - Verwijder berichten! \n **!melding** - Plaats een melding!")
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 
        .setColor('#009999');

    return message.channel.send(botEmbed);

}

module.exports.help = {
name: "help"
}