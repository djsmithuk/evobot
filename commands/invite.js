const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: "Invite the bot to your server.",
  execute(message) {

    let inviteEmbed = new MessageEmbed()
      .setTitle("Add us to your server!")
      .setDescription("Love using YAMB? Great, Thank you! Consider adding it to your server")
      .setColor("#7289da")
      .setAuthor('Yet.Another.Music.Bot')
      .setThumbnail(message.guild.iconURL())
      .addField(`Use the following link to add YAMB to your discord server`, 'https://djsmith.uk/yamb', true)

    inviteEmbed.setTimestamp();

    return message.channel.send(inviteEmbed).catch(console.error);
  }
};
