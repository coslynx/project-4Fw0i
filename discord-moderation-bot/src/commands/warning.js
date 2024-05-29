```javascript
// warning.js

// Import necessary dependencies and modules
const Discord = require('discord.js');

// Function to warn a user with a specified reason
const warnUser = (message, user, reason) => {
    // Check if the user has permissions to warn
    if (!message.member.hasPermission('KICK_MEMBERS')) {
        return message.reply('You do not have permission to warn users.');
    }

    // Find the user to warn
    const member = message.mentions.members.first();
    
    // Check if the user is found
    if (!member) {
        return message.reply('User not found.');
    }

    // Send a warning message to the user
    member.send(`You have been warned in ${message.guild.name} for: ${reason}`)
        .catch(console.error);

    // Log the warning in the moderation log
    const channel = message.guild.channels.cache.find(ch => ch.name === 'moderation-log');
    if (channel) {
        channel.send(`${member.user.tag} has been warned by ${message.author.tag} for: ${reason}`);
    } else {
        message.reply('Could not find the moderation log channel.');
    }
};

// Export the function to be used in other files
module.exports = {
    name: 'warn',
    description: 'Warn a user for specified reason',
    execute(message, args) {
        const user = args[0];
        const reason = args.slice(1).join(' ');

        warnUser(message, user, reason);
    }
};
```