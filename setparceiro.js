const Discord = require('discord.js')
const config = require('../config.json')

module.exports.run = (client, message, args) => {
message.delete();
  let embederro = new Discord.MessageEmbed()
    .setTitle("Command - Addrole")
    .setColor("#bb00ff")
    .setDescription(`**Com Esse Comando você adicionar um novo parceiro do bot no servidor de suporte**`)
    .addField("**Exemplo:**", `\`${config.prefix}setparceiro <User>\``)
    .addField("**Permissão:**", '\`Gerenciar Cargos\`')

  let erroMsg = args[0];
    if(!erroMsg) return message.reply(embederro)

    let userPerms = new Discord.MessageEmbed()
    .setColor("#bb00ff")
    .setDescription(`**Você Não Tem Permissão Necessária Para Usar o Comando!**`)
    .addField("**Permissão:**", '\`Gerenciar Cargos\`')
 
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply(userPerms)

    let botPerms = new Discord.MessageEmbed()
    .setColor("#bb00ff")
    .setDescription(`**Eu Não Tenho Permissão Necessária Para Usar o Comando!**`)
    .addField("**Permissão:**", '\`Gerenciar Cargos\`')

    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply(botPerms)

    let invalidMember = new Discord.MessageEmbed()
    .setColor("#bb00ff")
    .setDescription(`\`${message.author.username}\` **Bobinho(a)! Forneça Um Membro Válido Deste Sevidor Para adicionar um novo parceiro**`)

  let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.reply(invalidMember)

member.roles.add('751556043540136138')
 
 const embed = new Discord.MessageEmbed()
 .setColor("#bb00ff")
 .setDescription(`**Novo parceiro do Bot!**`)
 .addField("**Membro:**", `${member}`)
 .addField("**Cargo:**", `<@&751556043540136138>`)
 .setFooter(`Obs: Caso o Membro Não Receba o Cargo Significa Que o Cargo Está Acima Do Meu Cargo`)
 
 message.channel.send(embed)
 
 
 
 //log de parceiro 
// var canal = message.guild.channel.cache.find(ch => ch.id === "758503641589481562");
   const canal = new Discord.MessageEmbed()
     .setColor("#FFFFF1")
     .setTitle("Novo parceiro")
     .setDescrition (`Autor: ${message.author.user}\n usuário: ${member}`)
     
message.channel.get('758503641589481562"').send(canal)

}


