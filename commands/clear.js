module.exports = {
    name: 'clear',
    description: 'clear chat messages',
    execute(message, args){
        if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Vous n'avez pas la permission de faire ça !.").then((msg) => {
      msg.delete({ timeout: 2000});
});
  if (!args[0]) return message.channel.send("Vous devez spécifiez une valeur (1-99)");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel
      .send(`Clear ${args[0]} messages.`)
      .then((msg) => {
            msg.delete({ timeout: 2000});
      });
  });
    }, 
};