module.exports = {
    name: "invite",
    description: "Invite the bot to your server.",
    execute(message) {
  
      let invMe = new MessageEmbed()
      .setTitle("Invite Me")
      .setDescription(`Add me to your discord server [here](https://djsmith.uk/yamb)!`)
      .setColor("#7289da")
      .setAuthor("Yet.Another.Music.Bot")
      .addField(
          
      );
  
      return message.channel.send(invMe);
    },
  };
