```javascript
// commandCustomization.js

const Discord = require('discord.js');

const client = new Discord.Client();

client.on('message', message => {
    if (message.content === '!customCommand') {
        message.channel.send('This is a customizable command!');
    }
});

client.login('your-bot-token');
```