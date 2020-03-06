const { RichEmbed } = require("discord.js")
const { cyan } = require("../../colours.json");
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "meme",
        description: "Stuur een meme",
        usage: "!meme",
        category: "miscellaneous",
        accessableby: "Members",
    },
    run: async (bot, message, args) => {
    let msg = await message.channel.send("Generating...")

    fetch("https://apis.duncte123.me/meme")
    .then(res => res.json()).then(body => {
        if(!body) return message.reply("whoops! I've broke, try again!")

        let mEmbed = new RichEmbed()
        .setColor(cyan)
        .setTitle("Memes! :joy:")
        .setImage(body.data.image)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()

            message.channel.send(mEmbed)
            msg.delete();
        })
    }
}