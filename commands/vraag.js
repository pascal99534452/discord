const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ['Ik weet het niet zeker', 'Misschien wel.', 'Mijn hond heeft dorst.', 'Zonder twijfel.', 'Vraag het aan pieter.', 'Misschien niet.', 'Ik denk het.', 'Geen idee.', 'Sinterklaas weet het wel beter.', 'NOOIT!', 'Auke stinkt echt.', 'Ajax is gay.', 'Mijn muziek staat te hard.', 'Het gaat goed.', 'Ja.', 'Nee.', 'Ik weet het niet.', 'Jou vraag boeit niemand.', 'Precies'];

    let rand = [Math.floor(Math.random()*rand.length)];
    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle("8Ball")
    .setColor('#009999')
    .addField("Vraag:", question)
    .addField("Antwoord:", result)
    .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 

    message.channel.send({embed});

}

module.exports.help = {
name: "8ball"
}