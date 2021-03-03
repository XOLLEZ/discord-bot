const Discord = require('discord.js');
let config = require('../config.json');

module.exports = {
    name: 'suggest',
    description: 'Give a suggestion to the server',
    execute(message, args){
      if(message.channel.id === config.CHANNELS_ID.SUGGESTIONS){
        
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        let suggestion = args.join(" ");
        if (!suggestion)
        {
          let emptyEmbed = new Discord.MessageEmbed()
        .setTitle("Oops!")
        .setColor("#000000")
        .setDescription(`Hey <@${message.author.id}>, vous devez spécifier une suggestion !`);
        message.channel.send(emptyEmbed).then((msg) =>{
            setTimeout(() =>{
              msg.delete();
            },4000);
          });
          message.delete();
        }
        else{
          let embed = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL())
            .setColor(randomColor)
            .setTitle("Nouvelle suggestion")
            .setDescription("```fix\n "+suggestion+"\n```")
            .setFooter('Envoyée par : '+message.author.tag,  `${config.SERVER_LOGO}`)
            .setTimestamp(new Date());
          message.channel
            .send(embed)
            .then((message) => {
              const sent = message;
              sent
                .react("👍")
                .then(() => {
                  sent
                    .react("👎")
                })
                .catch(console.error);
            })
            .catch(console.error);
          return message.delete();

        }

      }else{
        message.delete();

        let wEmbed = new Discord.MessageEmbed()
        .setTitle("Oops!")
        .setColor("#000000")
        .setDescription(`Mauvais channel pour faire des suggestions, utiliser <#${config.CHANNELS_ID.SUGGESTIONS}> faire une suggestion `);
        message.channel.send(wEmbed).then((wmsg) =>{
          setTimeout(() =>{
            wmsg.delete();
          },5000);
       });
      }
        
         
        
    }, 
};