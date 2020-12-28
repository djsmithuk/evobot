const { MessageEmbed, Message } = require('discord.js');

module.exports = {
  name: "hug",
  description: "Hug a user.",
    run: async (client, message) => {
        let target = message.mentions.users.first()
        if (!target) return message.channel.send(`<@${message.author.id}>! Please Tag A User To Hug Or Tag Yourself To Hug Yourself lol ;(`)
        if (target.id === message.author.id) {
            const embed = new MessageEmbed()
                .setTitle('Get Hugged Kiddo')
                .setImage('https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif')
                .setColor('#7289da')
                .setFooter(`@${message.author.username} Hugged @${target.username}`)

            message.channel.send(embed)
        }
    }
}
