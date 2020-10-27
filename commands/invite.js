const Discord = require('discord.js');

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {
    // inside a command, event listener, etc.
    const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle('Add us to your server!')
    .setAuthor('Yet.Another.Music.Bot')
    .setDescription('Love using YAMB? Great, Thank you! Consider adding it to your server [here](https://djsmith.uk/yamb)')
    .setThumbnail(message.guild.iconURL())
    
    channel.send(exampleEmbed);
  }
};