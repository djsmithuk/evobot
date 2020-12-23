module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.send("You must be in a VC in order to use this bot!").catch(console.error);
      return;
    }

    return true;
  }
};
