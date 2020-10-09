const Discord = require('discord.js')

exports.run = async ( client, message, agr) => {
message.delete();
           const msg = await message.channel.send('<a:loading:758144565055455272>').then(msg => msg.delete({timeout: 2000}))
           
           message.channel.send("**Qual e o sentido de ser parceiro?**").then(msg1 => {
              let pergunta1 = message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
                .on('collect', t => {
                  let pergunta1 = t.content

             message.channel.send("**Já adicionou o bot no seu servidor? (Sim ou não)**").then(msg2 => {
            let pergunta2 = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let pergunta2 = d.content
            
             message.channel.send("**Qual é o Nome do seu Servidor?**").then(msg3 => {
            let pergunta3 = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let pergunta3 = d.content

             message.channel.send("**Alguma informações pra dizer?**").then(msg4 => {
            let pergunta4 = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
                .on('collect', d => {
                  let pergunta4 = d.content
             
                  const teste = new Discord.MessageEmbed()
                    .setColor('#FFB6C1')
                    .setTitle("Formulario de parceiro")
                    .setDescription(`<a:1__:748525710934671405> **Qual e o sentido de ser parceiro?**\n ${pergunta1} \n\n<a:2__:748526227937165372> **Já adicionou o bot no seu servidor?** \n ${pergunta2}\n\n<a:3__:748526275395715124>  **Qual é o nome do seu servidor?**\n ${pergunta3}\n\n<a:4__:748526515444252693> **Alguma Informações pra dizer?**\n${pergunta4}`)
                    .setFooter("Formulário feito por: "+message.author.username, message.author.displayAvatarURL({size: 32}))


                client.channels.cache.get('762675998272782386').send(teste)


                  message.channel.send(`${message.author}**o seu Formulario foi enviado com sucesso!**`)
                })
               })
              })
             })
            })
           })
          })
         })
}
