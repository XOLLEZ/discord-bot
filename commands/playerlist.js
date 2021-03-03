let config = require('../config.json');
const Discord = require('discord.js');
let PlayerCount = require('../server/players');

module.exports = {
    name: 'playerlist',
    description: 'See all players conected',
    execute(message, args){
        PlayerCount.getPlayerCount().then((result) => {
            
            let list = result.data;
            var id = "";
            var players = "";
            var ping = ""
            for(var i = 0; i < list.length; i++){
                id += list[i].id+'\n';
                players += list[i].name+'\n';
                ping += list[i].ping+'\n';
               
            }
            const pListEmbed = new Discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('Joueurs en ligne')
                .setDescription(`Total joueurs : ${list.length}`)
                .setThumbnail(config.SERVER_LOGO)
                .addFields(
                    { name: 'ID du joueur', value: id, inline: true  },
                    { name: 'Nom de joueur', value: players, inline: true  },
                    { name: '📶', value: `${ping}`, inline: true },
                   
                )
                .setTimestamp(new Date())
                .setFooter('Envoyée par : '+message.author.tag, `${config.SERVER_LOGO}`);
                message.channel.send(pListEmbed);
            
            
        })
        .catch(function(){
            const errpListEmbed = new Discord.MessageEmbed()
                .setColor('#000000')
                .setTitle('Joueurs en ligne')
                .setDescription(`Total joueurs : none`)
                .setThumbnail(config.SERVER_LOGO)
                .addFields(
                    { name: 'ID du joueur', value: '0', inline: true  },
                    { name: 'Nom de joueur', value: 'None', inline: true  },
                    { name: 'Ping', value: 'None', inline: true },
                   
                )
                .setTimestamp(new Date())
                .setFooter('Envoyée par : '+message.author.tag, `${config.SERVER_LOGO}`);
                message.channel.send(errpListEmbed);
        })
    }, 
};