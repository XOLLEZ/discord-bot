  
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');
let config = require('../config.json');
module.exports = {
    name: 'help',
    description: 'help Command',
    execute(message, args){
        const Fivem = new Discord.MessageEmbed()
        .setTitle('FiveM')
        .setColor('#000000')
        .addField(`${config.PREFIX}status`, 'Voir létat du serveur')
        .addField(`${config.PREFIX}playerlist`, 'Voir qui est connecté au serveur')
        .addField(`${config.PREFIX}suggest`, 'Faire une suggestion au serveur')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setTitle('Fun')
        .setColor('#000000')
        .addField(`${config.PREFIX}meme`, 'Génère un même aléatoire')
        .addField(`${config.PREFIX}cat`, 'Génère une image de chat aléatoire')
        .setTimestamp()

        const utility = new Discord.MessageEmbed()
        .setTitle('Utlity')
        .setColor('#000000')
        .addField(`${config.PREFIX}ping`, 'Pong')
        .addField(`${config.PREFIX}clear <1-99>`, 'Efface le chat')
        .setTimestamp()

        const pages = [
                Fivem,
                fun,
                utility
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }, 
};