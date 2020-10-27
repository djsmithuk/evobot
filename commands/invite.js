module.exports = {
    name: "invite",
    aliases: ["inv"]
    description: "Invite the bot to your server.",
    execute(message) {
  
      const data = [];
  
      data.push(`Invite link: https://djsmith.uk/yamb.`);
  
      message.channel.send(data, { split: true });
    },
  };
