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
          .setTitle(`Get Hugged, @<${message.mentions.users.first().id}>`)
          .setImage("https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif")
          .setColor("#7289da")
      return message.channel.send(hugEmbed).catch(console.error);
    }
  }
}



/* WORKING VERSION
module.exports = {
    name: 'hug',
    description: 'Used to hug everyone or mention a user to hug them specifically.',
    execute(message,args) {
        args = message.mentions.users.size;

        if (!args) {
            message.delete();
            return message.channel.send(`${message.author} gives a big ol' hug to everyone!`);
        }
        else {
            message.delete();
            return message.channel.send(`${message.author} sends love to ${message.mentions.users.first()} with a hug!`);
        }
    },
};
*/
