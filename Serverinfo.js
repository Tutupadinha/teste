
const Discord = require('discord.js');
const moment = require("moment");
moment.locale('pt-BR')

function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime();
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? " dia" : " dias") + " atrás";
};
module.exports.run = async (client, message, args) => {
  try {
    const voz = message.guild.channels.cache.filter(c => c.type === 'voice');
   const texto = message.guild.channels.cache.filter(c => c.type === 'text');
    let region = {
        "brazil": "Brasil",
        "eu-central": "Europa Central",
        "singapore": "SingaPura",
        "us-central": "U.S. Central",
        "sydney": "Sydney",
        "us-east": "U.S. Leste",
        "us-south": "U.S Sul",
        "us-west": "U.S Oeste",
        "eu-west": "Europa oriental",
        "vip-us-east": "VIP U.S Leste",
        "london": "London",
        "amsterdam": "Amsterdam",
        "hongkong": "Hong Kong"
    };
    
    var emojis;
    var txt;
    if (message.guild.emojis.cache.size === 0) {
        emojis = 0;
    } else {
        emojis = message.guild.emojis.cache.size;
    }
  txt = emojis == 1 ? txt = "emoji" : txt = "emojis"
	let criado = moment(message.guild.createdAt).format('L')
	let filtro1 = message.guild.roles.cache.filter(r => r.mentionable === true).size
	let filtro2 = message.guild.roles.cache.filter(r => r.mentionable === false).size
	if(filtro1 === 0) filtro1 = "nenhum"
	if(filtro2 === 0) filtro2 = "nenhum"
	let nsfw = message.guild.channels.cache.filter(c => c.nsfw === true).size
	if(nsfw === 0) nsfw = "nenhum"
    const embed = new Discord.MessageEmbed()
  .setAuthor(message.guild.name, message.guild.iconURL() ? message.guild.iconURL() : client.user.displayAvatarURL())
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
 .addField(`<a:discord:758144679564541956>|Informações do servidor`, `<a:gifseta:748527243428364350> Nome: ${message.guild.name}\n<a:gifseta:748527243428364350> Região: ${region[message.guild.region]}\n<a:gifseta:748527243428364350> Criado em: (${criado}) ${checkDays(message.guild.createdAt)}\n<a:gifseta:748527243428364350> Numero de emojis: ${emojis} ${txt}`)
 .addField(`CANAIS [${message.guild.channels.cache.size}]\n<a:gifseta:748527243428364350> Voz: \`${voz.size}\`\n<a:gifseta:748527243428364350> Texto: \`${texto.size}\``)
 .addField(`⠀`, `<a:gifseta:748527243428364350> CARGOS [${message.guild.roles.cache.size}]`)
 .addField(`<a:gifseta:748527243428364350> Dono: **${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}**\n<a:gifseta:748527243428364350> membros [${message.guild.memberCount}]`)

  message.channel.send({embed});
  } catch(e) { message.channel.send(`aconteceu um erro ao executar esse comando!\n\`\`${e}\`\``); client.channels.cache.get('751902153580478575').send(`:x: novo erro no comando serverinfo,\n\`\`${e}\`\``) }
}

module.exports.help = {
  name: "serverinfo",
  aliases: ['server', 'svinfo'],
  desc: "ver algumas informações do servidor!",
  cat: "info"
}
module.exports.config = {
  perm: "SEND_MESSAGES",
  dev: false,
  cperm: "SEND_MESSAGES"
}

