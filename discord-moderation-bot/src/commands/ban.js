```python
# ban.js

# Import necessary libraries

# Define the ban command function
async def ban(ctx, member, *, reason=None):
    if ctx.author.guild_permissions.ban_members:
        if member.guild_permissions.administrator:
            await ctx.send("You cannot ban an administrator!")
        else:
            await member.ban(reason=reason)
            await ctx.send(f"{member} has been banned.")
    else:
        await ctx.send("You do not have permission to ban members.")

# Add the command to the bot
def setup(bot):
    bot.add_command(ban)
```