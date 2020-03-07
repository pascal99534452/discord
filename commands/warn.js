const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var embedColor = '#009999' // Change this to change the color of the embeds!

    var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor(embedColor)
        .setTitle('Permissies!')
        .setDescription('Je hebt geen permissies voor dit commando!')
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 
    var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(embedColor)
        .setTitle('Warn Help')
        .setDescription('Gebruik: `warn [@User] [Reason]')
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
    let mentioned = message.mentions.users.first(); // Gets the user mentioned!
    if (!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message
    let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
    if (!reason) return message.channe.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning

    var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .setTitle(`Je bent gewarned in: ${message.guild.name}`)
        .addField('Gewarned door:', message.author.tag)
        .addField('Reason', reason)
        .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1') .setTimestamp() 
    mentioned.send(warningEmbed); // DMs the user the above embed!
    var warnSuccessfulEmbed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
        .setColor(embedColor)
        .setTitle('User is gewarned');
    message.channel.send(warnSuccessfulEmbed); // Sends the warn successful embed
    message.delete(); // Deletes the command
}

module.exports.help = {
    name: "warn"
}