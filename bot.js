const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    //console.log(guild.available());
});

client.on('message', msg => { 
    if (msg.content === 'meow') {
        const attachment = new Attachment('https://cdn.discordapp.com/attachments/448114628451368971/677180771588505646/b3188fd.jpg');
        msg.channel.send(attachment);
    }
   if (msg.content === 'lmao') {
    const emoji = msg.guild.emojis.find( ({ name }) => name === 'HHHAH' );
    msg.channel.send(`${emoji}`);
}
    if (msg.content === 'yeehaw') {
        msg.channel.send(':cowboy:');
    }
    if (msg.content === 'yes') {
        msg.channel.send('no!');
    }  
    if (msg.content === 'hi') {
        msg.channel.send('Hello friend!');
    }
    if (msg.content === 'no') {
        msg.channel.send('yes!');
    }
});

client.login('Njc2ODg3MDE3Njg2MTcxNjU5.XkMRDg.DXaaZeD0cb50fXg59l2bkAhVEEM');