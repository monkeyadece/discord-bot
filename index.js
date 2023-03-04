const { Client, Intents } = require("discord.js");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

const prefix = '!';

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', (message) => {
    if (message.content.startsWith(prefix) && !message.author.bot) {
        const args = message.content.slice(prefix.length).trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command === 'ping') {
            message.channel.send('Pong!');
        }
    }
});


client.login(process.env.TOKEN);
