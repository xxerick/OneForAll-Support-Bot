const { Client } = require('discord.js');
const client = new Client();
const Discord = require('discord.js');
const { MessageMenuOption,  MessageMenu, MessageActionRow } = require('discord-buttons');
require('discord-buttons')(client)

    if (message.content.toLowerCase() == "menu") {
        if(message.author.id === client.user.id) return;
    message.delete()
  const one = new MessageMenuOption().setLabel('Comment puis-je obtenir un bot perso ?').setEmoji('1️⃣').setValue('one').setDescription('Vous recevrez un tutoriel sur la façon d\'acheter un bot perso.')
  const two = new MessageMenuOption().setLabel('Pourquoi OneForAll ne répond pas à !help ?').setEmoji('2️⃣').setValue('two').setDescription('Vous recevrez une explication des raisons pour lesquelles le bot ne répond pas a !help.')      
  const three = new MessageMenuOption().setLabel('Mon token est-il sécurisé ?').setEmoji('3️⃣').setValue('three').setDescription('Vous recevrez une réponse, que votre token soit sécurisé ou non. ')     
  const four = new MessageMenuOption().setLabel('Comment puis-je inviter le bot OneForAll ?').setEmoji('4️⃣').setValue('four').setDescription('Vous recevrez un tutoriel sur la façon d\'inviter le OneForAll. ')     
  const five = new MessageMenuOption().setLabel('Pourquoi le bot est dans les commandes slash ?').setEmoji('5️⃣').setValue('five').setDescription('Vous recevrez une explication de la raison pour laquelle le bot est dans les commandes slash.')     
  const six = new MessageMenuOption().setLabel('Mon problème n\'est pas dans la liste').setEmoji('6️⃣').setValue('six').setDescription('On vous dira quoi faire si votre problème ne figure pas sur cette liste. ')     

  const select = new MessageMenu()
    .setID('select1')
    .setPlaceholder('Sélectionnez votre question dans le menu')
    .addOption(one)
    .addOption(two)
    .addOption(three)
    .addOption(four)
    .addOption(five)
    .addOption(six)

    .setMaxValues(1)
    .setMinValues(1)
 const Row1 = new MessageActionRow()
 .addComponent(select)   

 const embed = new Discord.MessageEmbed()
 .setTitle('OneForAll - Auto Support. ')
 .setThumbnail(`https://media.discordapp.net/attachments/891007917669625906/915679967197671504/OneForAll.png?width=580&height=580`)

.setDescription('**Sélectionnez votre question dans le menu ci-dessous**.\n\n1️⃣ Comment puis-je obtenir un bot perso ?\n2️⃣ Pourquoi OneForAll ne répond pas à !help ?\n3️⃣ Mon token est-il sécurisé ?\n4️⃣ Comment puis-je inviter le bot OneForAll ?\n5️⃣ Pourquoi le bot est dans les commandes slash ?\n6️⃣ Mon problème n\'est pas dans la liste')
.setColor(`#2F3136`)

await message.channel.send(embed, { components: [Row1] });
 
}
})  

client.on('clickMenu', async (menu) => {
    const Member = menu.clicker.member 
    if (menu.values[0] == 'one') {
        menu.reply.send(`Bonjour <@${Member.id}>, si vous souhaitez acheter un bot perso, vous pouvez vérifier <#784399775982157857> (https://discord.com/channels/780528735183044709/784399775982157857/916411391106232340)`, true)
    }
    if (menu.values[0] == 'two') {
        menu.reply.send(`Bonjour <@${Member.id}>, Nous avons déplacer tout le bot en slash (\`5\` pour plus d'information) donc le prefix est maintenant \`/\` .`, true)
    }
    if (menu.values[0] == 'three') {
        menu.reply.send(`Bonjour <@${Member.id}>, contrairement à **OneForAll V1.0** nous avons renforcé nos sécurité nous encryptons difficilement tout vos token de bot pour éviter tout risque.

        Token non encrypté: \`OTA2MjM0NDY0NzcyOTc2Nzcx.YYVqnQ.Q5pJOYrARO7N2rQy16_Xq5LeODQ\`
        Token encrypté: \`U2FsdGVkX1+XawM84mUxO3XxVCOU6V2/m9JhYlEvu+9Vxn6aouvMrQxIx5kM5jduurXifmK2vt8N248gnMIBntXYZWvi1QoCLF7n6w+EWd8=\`  `, true)
    }
    if (menu.values[0] == 'four') {
        menu.reply.send(`Bonjour <@${Member.id}>, pour inviter le bot il suffit de cliquer sur ce lien : \nhttps://discord.com/api/oauth2/authorize?client_id=912445710690025563&permissions=8&scope=bot%20applications.commands`, true)
    }
    if (menu.values[0] == 'five') {
        menu.reply.send(`Bonjour <@${Member.id}>, nous allons devoir demander un accès a discord pour pouvoir avoir accès au contenue des messages c'est donc pourquoi nous avons supprimé les commandes normale.`, true)
    }
    if (menu.values[0] == 'six') {
        menu.reply.send(`Bonjour <@${Member.id}>, si votre question ne figure pas dans cette liste, mentionnez un staff dans le chat ou créer un ticket (<#784107730368593940>).`, true)
    }
})



client.on('ready', () => {
    console.log("Bot ready")
})
client.login('token');
