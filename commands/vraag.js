const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("BAM");
    let replies = [
        'Ik weet het niet zeker',
	    'Misschien wel.',
	    'Mijn hond heeft dorst.',
	    'Zonder twijfel.',
    	'Vraag het aan pieter.',
	    'Misschien niet.',
    	'Ik denk het.',
    	'Geen idee.',
    	'Sinterklaas weet het wel beter.',
    	'NOOIT!',
    	'Auke stinkt echt.',
	    'Ajax is gay.',
    	'Mijn muziek staat te hard.',
    	'Het gaat goed.',
    	'Ja.',
	    'Nee.',
	    'Ik weet het niet.',
    	'Jou vraag boeit niemand.',
    	'Precies',
    ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let embed = new Discord.RichEmbed()
    .setTitle("8Ball")
    .setColor('#009999')
    .addField("Vraag:", question)
    .addField("Antwoord:", replies[result])
    .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 

    message.channel.send({embed});

}

module.exports.help = {
name: "8ball"
}