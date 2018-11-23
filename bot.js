const Discord = require('discord.js');
//--------------------------------------------
var client = new Discord.Client();
const prefix = '7'
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
});
client.on('ready', async() => {
var server = "514240284897312769"; // ايدي السررفر
var channel = "514405323306434561";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
    client.guilds.get(server).channels.get(channel).send('**𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , 𓆩A7MDKW𓆪 , **')
},305);
})



client.on('message', message => {
    var args = message.content.split(' ').slice(1); 
    if(message.content.startsWith(prefix + "t")) {
        message.channel.send(`#credits <@351472610732670976> ${args}`)
    }
});


client.on('message', message => {
    var args = message.content.split(' ').slice(1); 
    if(message.content.startsWith(prefix + "c")) {
        message.channel.send(`#credits`)
    }
});

client.on('message', message => {
    var args = message.content.split(' ').slice(1); 
    if(message.content.startsWith(prefix + "d")) {
        message.channel.send(`#daily`)
    }
});
 


 
client.login(process.env.BOT_TOKEN);
