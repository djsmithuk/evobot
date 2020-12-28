const Discord = require('discord.js')

module.exports = {
    name: "mute",
    description: "Mutes a player",
    minArgs: 1,
    expectedArgs: '@User <reason>',
    permissions: ['MANAGE_MESSAGES'],
    callback: (message, args, text, client) => {
        const author = message.author
        const member = message.mentions.members.first()
        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        let reason = ''
        if (!args[1]) reason = 'No reason specified'
        else reason = args.slice(1).join(' ')
        if (member.roles.cache.find(r => r.name.toLowerCase() === 'muted')) return message.reply('User is already muted!')
        if (!message.guild.me.hasPermission('MANAGE_ROLES')) return message.reply('I do not have the permissions to mute the user! `MANAGE_ROLES`')
        if (member.id === message.author.id) return message.reply('Why would you want to mute yourself...')
        if (member.id === client.user.id) return message.reply('You know I have feelings too.. right? :(')
        if (message.member.roles.highest.position <= member.roles.highest.position) return message.reply('User could not be muted!')
        if (!member) return message.reply('Please mention a user!')
        if (!role) {
            const Embed = new Discord.MessageEmbed()
                .setTitle('Muting Error!')
                .setDescription('It appears that your discord server does not currently have a `Muted` role.\n\nWould you like to generate one?')
                .setColor('RED')
            message.channel.send(Embed).then(async message => {
                await message.react("✅")
                await message.react("❌")

                const filtro = (reaction, user) => ['✅', '❌'].includes(reaction.emoji.name) && user.id === author.id
                const collector = message.createReactionCollector(filtro)

                collector.on("collect", async r => {
                    switch (r.emoji.name) {
                        case '✅':
                            if (message.guild.roles.cache.size >= 250) {
                                message.channel.send(' Failed to generate a `Muted` role. Your server has too many roles! [250]\nMore information can be found at: https://discordia.me/en/server-limits')
                                collector.stop()
                                break
                            }
                            message.reactions.removeAll()
                            if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) {
                                message.channel.send('I do not have the proper permissions to create this role! `MANAGE_CHANNELS`')
                                collector.stop()
                                break
                            }
                            const mutedRole = await message.guild.roles.create({
                                data: {
                                    name: 'Muted',
                                    color: 'GRAY'
                                }
                            })
                            message.channel.send('A `muted` role has been created!')
                            message.guild.channels.cache.forEach(async (channel, id) => {
                                await channel.createOverwrite(mutedRole, {
                                    READ_MESSAGES: false,
                                    SEND_MESSAGES: false,
                                    READ_MESSAGE_HISTORY: false,
                                    ADD_REACTIONS: false,
                                    VIEW_CHANNEL: false,
                                    CONNECT: false,
                                    SPEAK: false
                                })
                            });

                            try {
                                member.roles.add(mutedRole)
                                message.channel.send(`${member} has been successfully muted for \`${reason}\`!`)
                                collector.stop()
                            } catch (err) {
                                message.channel.send('I do not have permissions to add a role to this user! `[MANAGE_ROLES]`')
                                collector.stop()
                                break
                            }
                            break;
                        case '❌':
                            message.channel.send('Cancelled.')
                            collector.stop()
                            break;
                    }
                })
            })

        } else {
            try {
                member.roles.add(role)
                message.channel.send(`${member} has been successfully muted for \`${reason}\`!`)
            } catch (err) {
                message.reply('I do not have permissions to add a role to this user! `[MANAGE_ROLES]`')
            }
        }
    }
}
