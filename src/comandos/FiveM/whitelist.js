//Autor: MatthewRib

const Client = require('discord.js') 

  module.exports = {
    config: {
      nome: 'whitelist',                                                   // NOTA: Coloque o nome do comando SEMPRE em letras minúsculas!
      aliases: ['wl'],                               // Alternativas para o comando, para você poder usar o comando com vários nomes diferentes.
      descricao: 'Comando que faz a whitelist.',     // Descrição do comando (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      utilizacao: '!wl',                                               // Modo de utilização do comando. Deixe em branco, ou seja, apenas com '', caso o comando não precise de argumentos para ser usado (OPCIONAL, porém é útil para organização ou para um comando de ver a informação de outros comandos).
      cooldown: 1200                                                 // 300 segundos de tempo de espera até o usuário poder executar o comando de novo. Caso o comando não tenha tempo de espera, pode remover esta linha ou colocar     cooldown: 0
    },
    
    run: async (client, message, args) => {
      
      // CONFIGURAÇÃO DA WHITE-LIST!
      const margemdeacertos = 6; // MARGEM DE ACERTOS PARA ELE PASSAR
      const resultadowlstaff = "758707232388284433" // RESULTADO DA WHITELIST PARA STAFF'S
      const iddacategoria = "758707227078295585"; // ID DA CATEGORIA DA WHITELIST
      const canaldewhitelist1 = "760528984596545607"; // CANAL DE FAZER WHITELIST
      const iddoservidor = "758707226050822154";
      const whitelistcargo = "758707226059079716";
      const nonwhitelistcargo = "758707226050822154";
      const imgwl = "https://i.pinimg.com/originals/cf/e6/f7/cfe6f7783653c5149e94c3519cf11467.png"; // EMBED IMG

      if(message.channel.id !== canaldewhitelist1) return message.channel.send(message.author.toString() + ` Você não pode usar este comando nesse chat. Utilize: <#${canaldewhitelist1}>`)



        let guild = message.guild;


            const channel2 = await guild.channels.create(`whitelist-${message.author.username}`,{
            type: 'text',
            parent: iddacategoria,
            permissionOverwrites:[
                {
                    allow: ['VIEW_CHANNEL','READ_MESSAGE_HISTORY','EMBED_LINKS','ATTACH_FILES','SEND_MESSAGES'],
                    id: message.author.id
                },
                {
                    deny: 'VIEW_CHANNEL',
                    id: guild.id
                }
            ]
        }); 
        channel2.send(`<@${message.author.id}>`)
        async function createForm({ questions, channel, time, user }) {
    const { once } = require("events")
  
    const answers = []
  
    for (const question of questions) {

      const embed = new Client.MessageEmbed()
      .setColor("GREEN")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Pergunta da WhiteList\n`)
                        .addField("Pergunta: ", `${question} \n\n\`Você têm ${time/1000} segundos para responder!\``)
                        .setTimestamp(new Date())
                        .setFooter(`Leia com atenção!`)

        channel2.send(embed)
  
      const filter = m => m.author.id === user.id && m.channel.id === channel2.id && m.content.length >= 1
      const options = { time: time, max: 1 }
  
      const collector = channel2.createMessageCollector(filter, options)
  
      const [collected, reason] = await once(collector, 'end')
  
      if (reason == 'limit') answers.push(collected.first().content)
      
      else if (reason == 'channelDelete') throw new Error('channelDelete')
      
      else if (reason == 'time') throw new Error('time')
  
    }
  
    return answers
  
  }


  createForm({ 
    questions: [
  "Qual seu nome completo?",

  "Qual a sua idade?",
 
  "Você possui microfone?",

  "1. O que é PowerGaming?\n\n 1⃣ Atropelar as pessoas na cidade  \n\n 2⃣ Fazer no jogo algo que pode ser feito na vida real \n\n 3⃣  Fazer no jogo algo que não pode ser feito na vida real \n\n 4⃣ Matar as pessoas na cidade",

  "2. O que é MetaGaming? \n\n 1⃣ É andar sobre montanhas com carros que não fariam isso na vida real. \n\n 2⃣ É chamar um personagem pelo ID sem nem saber o nome. \n\n 3⃣ Utilizar informações que não foram obtidas através do RP. \n\n 4⃣ É matar pessoas na cidade sem algum motivo ou razão. ",
  
  "3. O que é Anti-RP? \n\n 1⃣ É conversar com um jogador chamando pelo ID \n\n 2⃣ É não desenvolver um papel da vida real. \n\n 3⃣ É você cometer infrações de trânsito. \n\n 4⃣ É desenvolver um papel igual da vida real. ",
  
  "4. O que é Safezone? \n\n 1⃣ São lugares onde se vende coletes. \n\n 2⃣ São lugares em que não se pode roubar ou matar. \n\n 3⃣ São lugares para regenerar vida. \n\n 4⃣ São lugares onde se pode roubar e matar. ",
  
  "5. O que é VDM? \n\n 1⃣ É cair de moto em movimento. \n\n 2⃣ É matar em lugares proibídos. \n\n 3⃣ É matar outro jogador atropelado. \n\n 4⃣ É dar carona de carro para outro jogador.",
  
  "6. O que é RDM? \n\n 1⃣ É matar um jogador sem motivo. \n\n 2⃣ É matar um jogador porque ele tentou te roubar. \n\n 3⃣ É matar um jogador porque ele roubou seu carro \n\n 4⃣ É matar um jogador porque ele tentou te matar. ",
  
  "7. O que é COMBAT LOGGING? \n\n 1⃣ É entrar em combate na ação. \n\n 2⃣ É chamar alguém para lutar. \n\n 3⃣ É sair da cidade para fugir de abordagem, prisão, roubo. \n\n 4⃣ É tentar fugir ao ser abordado. ",
  
  "8. Quais desses não é uma Safezone? \n\n 1⃣ Praça \n\n 2⃣ Hospital \n\n 3⃣ Concessionária \n\n 4⃣ Delegacia. ",
  
  "9. O que fazer ao descobrir um bug? \n\n 1⃣ Ir até o discord e reportar o bug \n\n 2⃣ Falar para um amigo para abusarem juntos. \n\n 3⃣ Ignorar e não fazer nada \n\n 4⃣ Abusar do bug sem ninguém saber. ",
  
  "10. Qual tipo de Role Play você pretende fazer na cidade? \n\n 1⃣ Policial \n\n 2⃣ Bandido \n\n 3⃣ Médico \n\n 4⃣ Outros."
  
], 
    channel: message.channel2, 
    time: 50000, 
    user: message.author 
  })
.then(respostas => {

  var exp = 0;
      if(respostas[3] === "3"){
        exp += 1;
      }
      if(respostas[4] === "3"){
        exp += 1;
      }
      if(respostas[5] === "2"){
        exp += 1;
      }
      if(respostas[6] === "2"){
        exp += 1;
      }
      if(respostas[7] === "3"){
        exp += 1;
      }
      if(respostas[8] === "1"){
        exp += 1;
      }
      if(respostas[9] === "3"){
        exp += 1;
      }
      if(respostas[10] === "1"){
        exp += 1;
      }
      if(respostas[11] === "1"){
        exp += 2;
      }
      if(exp >= "6"){
        message.author.send(`Você foi aprovado, parabéns! Você teve ${exp}/10 de acertos!`)
        channel2.delete()
      }
      else{
        message.author.send(`Você reprovou com ${exp}/10 de acertos! Tente novamente.`)
        channel2.delete()
      }

      if(exp >= margemdeacertos){

        console.log(exp)
      
      const embedstaff = new Client.MessageEmbed()
      .setColor("#2b961f")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Resultado da Whitelist\n`)
                        .addField('USUÁRIO:', `<@${message.author.id}>`)
                        .addField('NOME:', `${respostas[0]}`)
                        .addField('IDADE:', `${respostas[1]}`)
                        .addField('SITUAÇÃO:', `APROVADO`)
                        .addField('RESPOSTAS:', `${respostas}`)
                        .addField('PONTUAÇÃO:', `${exp}/10`)
                        .setAuthor('Whitelist - Costa Norte', imgwl, 'https://discord.gg/Uwk3egUNUT')
                        .setThumbnail(imgwl)
                        .setTimestamp(new Date())
                        .setFooter(`Parabéns! Bem vindo ao Costa Norte RP.`)
      client.channels.cache.get(resultadowlstaff).send(embedstaff)



      // --------------------------------------------------------------- RESULTADO APROVADO PARA USUÁRIOS
      
      const embed2 = new Client.MessageEmbed()
      .setColor("#2b961f")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Resultado da Whitelist\n`)
                        .addField('USUÁRIO:', `<@${message.author.id}>`)
                        .addField('NOME:', `${respostas[0]}`)
                        .addField('IDADE:', `${respostas[1]}`)
                        .addField('SITUAÇÃO:', `APROVADO`)
                        .addField('PONTUAÇÃO:', `${exp}/10`)
                        .setAuthor('Whitelist - Costa Norte', imgwl, 'https://discord.gg/Uwk3egUNUT')
                        .setThumbnail(imgwl)
                        .setTimestamp(new Date())
                        .setFooter(`Parabéns! Bem vindo ao Costa Norte RP.`)
      client.guilds.cache.get(iddoservidor).members.cache.get(message.author.id).roles.add(whitelistcargo)
      client.guilds.cache.get(iddoservidor).members.cache.get(message.author.id).roles.remove(nonwhitelistcargo)

      }else{
        console.log(exp)


      // ------------------------------------------------------- RESULTADO :REPROVADO: PARA STAFFS

        const embedstaff2 = new Client.MessageEmbed()
        .setColor("#ff0000")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Resultado da Whitelist\n`)
                          .addField('USUÁRIO:', `<@${message.author.id}>`)
                          .addField('NOME:', `${respostas[0]}`)
                          .addField('IDADE:', `${respostas[1]}`)  
                          .addField('SITUAÇÃO:', `REPROVADO`)
                          .addField('RESPOSTAS:', `${respostas}`)
                          .addField('PONTUAÇÃO:', `${exp}/10`)
                          .setAuthor('Whitelist - Costa Norte', imgwl, 'https://discord.gg/Uwk3egUNUT')
                          .setThumbnail(imgwl)
                          .setTimestamp(new Date())
                          .setFooter(`Infelizmente, o mesmo reprovou. Mas pode refazer a whitelist!`)
        client.channels.cache.get(resultadowlstaff).send(embedstaff2)



      // -------------------------------------------------------------- RESULTADO REPROVADO PARA STAFFS


        const embed3 = new Client.MessageEmbed()
        .setColor("#ff0000")//COR DA CAIXA DE DIALOGO
                          .setTitle(`Resultado da Whitelist\n`)
                          .addField('USUÁRIO:', `<@${message.author.id}>`)
                          .addField('NOME:', `${respostas[0]}`)
                          .addField('IDADE:', `${respostas[1]}`)  
                          .addField('SITUAÇÃO:', `REPROVADO`)
                          .addField('PONTUAÇÃO:', `${exp}/10`)
                          .setAuthor('Whitelist - Costa Norte', imgwl, 'https://discord.gg/Uwk3egUNUT')
                          .setThumbnail(imgwl)
                          .setTimestamp(new Date())
                          .setFooter(`Infelizmente, o mesmo reprovou. Mas pode refazer a whitelist!`)
      }

    console.log(`O usuário terminou o formulário com a pontuação de ${exp}/10.`)
  })

  .catch(err => {
    if (err.message == 'time') {
      console.log(`O usuário ignorou o formulário e por isto foi cancelado.`)
      message.author.send(`Você reprovou pois o seu tempo acabou. Tente novamente.`)
      channel2.delete()
    } else if (err.message == 'channelDelete') {
      console.log(`O canal foi deletado e por isto o formulário foi cancelado.`)
      message.author.send(`Você reprovou pois o seu canal foi deletado. Tente novamente.`)
    } else {
      console.log(`Algo deu errado ao trabalhar o formulário!`, err)
      message.author.send(`Você reprovou pois aconteceu algo com o bot/servidor. Tente novamente.`, err)
      channel2.delete()
    }
})
}
    }