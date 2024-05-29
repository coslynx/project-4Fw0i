```javascript
// moderationLogger.js

const fs = require('fs');

const logModerationAction = (action, user, reason) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${action} - User: ${user} | Reason: ${reason}\n`;

  fs.appendFile('moderation.log', logMessage, (err) => {
    if (err) {
      console.error('Error logging moderation action:', err);
    }
  });
};

module.exports = { logModerationAction };
```