const { MessageEmbed, Message } = require('discord.js');

module.exports = {
  name: 'hug',
  description: 'Used to hug everyone or mention a user to hug them specifically.',
  execute(message,args) {
    args = message.mentions.users.size;

    if (!args) {
      message.delete();
      return message.channel.send(`<@${message.author.id}>! Please Tag A User To Hug Or Tag Yourself To Hug Yourself lol ;(`)
    }
    else{
      message.delete();
      let hugEmbed = new MessageEmbed()
          .setTitle("Get Hugged Kiddo!")
          .setDescription(`${message.author} sends their love to ${message.mentions.users.first()}`)
          .setThumbnail("https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif")
          .setColor("#7289da")
      return message.channel.send(hugEmbed).catch(console.error);
    }
  }
}
