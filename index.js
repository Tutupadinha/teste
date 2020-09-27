const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos


//status do meu bot
client.on("ready", () => {
  let activities = [
      `Utilize n!ajuda para obter ajuda`,
      `${client.guilds.cache.size} servidores!`,
      `${client.channels.cache.size} canais!`,
      `${client.users.cache.size} usuários!`,
      `${client.commands} comandos!`
    ],
    i = 0;
  setInterval( () => client.user.setPresence({
  type: 'STREAMING',
  name: 'amo vcs '
}), 1000 * 30);
  client.user
      .setStatus("dnd")
      .catch(console.error);
console.log("Estou Online!")
});


//entrada servidor oficial
client.on("guildMemberAdd", async (member) => { 
  let guild = await client.guilds.cache.get("743841292483821678");
  let channel = await client.channels.cache.get("749331412624211979");
  if (guild != member.guild) {
    return console.log("Sem boas-vindas pra você! Sai daqui saco pela.");
   } else {
      let embed = await new Discord.MessageEmbed()
      .setColor("#7c2ae8")
      .setAuthor(member.user.tag, member.user.displayAvatarURL())
      .setTitle(` **Boas vindas** `)
      .setImage("https://cdn.discordapp.com/attachments/727543573343371306/727576074132652153/giphy_8.gif")
      .setDescription(`<a:welcome:744241103762358340> Boas-vindas ${member.user}\n <a:estrela1:748528100501094461> ao servidor <#749331404105711696> \n <a:fixado:748527439550087228> Leia as regras <#749331404801835008> \n <a:gifseta:748527243428364350> Quer se parceiro do bot vai no <#751591699943391232>\n`)
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, format: "png", size: 1024 }))
      .setFooter("Código de Gabriel")
      .setTimestamp();

    channel.send(embed);
  }
});


//Marcação monstro o prefix
client.on('message', message => {

//embed
const botMencion = new Discord.MessageEmbed()
.setTitle(`<a:emoji_164:745105631815401522> Ola eu sou Nuclear`)
.setColor("#FFC0CB")
.setDescription(`<a:estrela1:748528100501094461> Minha prefix é \`${config.prefix}\`\n<a:estrela1:748528100501094461> use **n!ajuda**.\n<a:estrela1:748528100501094461> Meu Dono: <@543155193689276416>\n<a:estrela1:748528100501094461> línguagem de programação: Javascript <:js:753681056053461144>\n<a:estrela1:748528100501094461> Servidores: ${client.guilds.cache.size}\n<a:estrela1:748528100501094461> usuários: ${client.users.cache.size}\n `)

  
if (message.content == '<@752954163742113897>') {
    message.channel.send(botMencion).then(msg => msg.delete({timeout: 5000}))

  }
})

//se digitar um . ele vai enviar isso 
client.on('message', message => {

//embed
const botMencion = new Discord.MessageEmbed()
.setTitle(`<a:emoji_164:745105631815401522> Ola eu sou Nuclear`)
.setColor("#FFC0CB")
.setDescription(`<a:estrela1:748528100501094461> Minha prefix é \`${config.prefix}\`\n<a:estrela1:748528100501094461> use **n!ajuda**.`)
  
//message.delete({timeout: 12000})
  
if (message.content == 'ajuda') {
    message.channel.send(botMencion).then(msg => msg.delete({timeout: 5000}))

  }
})




client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix)) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
    //message.channel.send(`${message.author}, **esse comando não foi encontrado, utilize **n!ajuda** para mais informações.**`)
  }
});


client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
