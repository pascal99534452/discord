const discord = module.require("discord.js");

function rand(low, high) {
  return Math.random() * (high + 1 - low) + low | 0;
}

module.exports.run = async (bot, message, args) => {

  if (args[0]) {
    var gelijkspell = new discord.RichEmbed()
      .setTitle('**Steen, papier, schaar!**')
      .setDescription('Het is gelijkspel! :frowning: ')
      .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
      .setColor('#009999');

    var gewonnenn = new discord.RichEmbed()
      .setTitle('**Steen, papier, schaar!**')
      .setDescription('Je hebt gewonnen! :tada: ')
      .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
      .setColor('#009999');

    var verlorenn = new discord.RichEmbed()
      .setTitle('**Steen, papier, schaar!**')
      .setDescription('Helaas je hebt verloren! :frowning: ')
      .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
      .setColor('#009999');

    var argss = new discord.RichEmbed()
      .setTitle('**Steen, papier, schaar!**')
      .setDescription('Gebruik: !rps steen , papier , schaar! :slight_smile: ')
      .setFooter('UnitedMC', 'https://i.imgur.com/7A0DkcB.png?1').setTimestamp()
      .setColor('#009999');
    // get user choice && user choice
    let computer_choice = rand(0, 2);
    let user_choice = args[0] == "rock" ? 1 : args[0] == "paper" ? 2 : 0;

    // if their choices are same its a draw :D
    if (computer_choice == user_choice) {
      message.channel.send(gelijkspell);
    }
    else if (computer_choice < user_choice || computer_choice == 0 && user_choice == 2) {
      message.channel.send(verlorenn);
    } else {
      message.channel.send(gewonnenn);
    }
  }

  if (!args[0]) {
    message.reply(argss);
  }
}

module.exports.help = {
  name: "rps"
}