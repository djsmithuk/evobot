const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "changes",
  aliases: ["cl"],
  description: "View upcoming changes in the next rolling build of YAMB.",
  execute(message) {

    let changesEmbed = new MessageEmbed()
      .setTitle("What's new in this release!")
      .setDescription("YAMB is actively being developed and here are some things we are actively working on!")
      .setColor("#7289da")
      .setAuthor('Yet.Another.Music.Bot')
      .setThumbnail(message.guild.iconURL())
      .addField('<:DSS_info:763387095637032970> In Testing', 'Sharding - This feature has been delayed.', true)
      //.addField('<:DSS_info:763387095637032970> <:DSS_removed:763387094991110144> In Testing', 'Custom server prefixes and preferences', true)

    changesEmbed.setTimestamp();

    return message.channel.send(changesEmbed).catch(console.error);
  }
};
