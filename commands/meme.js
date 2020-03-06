const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

module.exports.run = async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch("https://apis.duncte123.me/meme")
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("Oeps! Het werkt even niet, probeer het opnieuw!")

        let mEmbed = new RichEmbed()
        .setColor('#009999')
        .setTitle("Memes! :joy:")
        .setImage(body.data.image)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()

            message.channel.send(mEmbed)
            msg.delete();
        })
}

module.exports.help = {
    name: "meme",
    description: "Maak een ticket aan"
}