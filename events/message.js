const talkedRecently = new Set();

module.exports = (client, message) => {

    // Ignore all bots
    if (message.author.bot) return;
    
    // Ignore messages not starting with the prefix (in config.json)
    if (message.content.indexOf(client.config.prefix) !== 0) return;
  
    // Our standard argument/command name definition.
    const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    // Grab the command data from the client.commands Enmap
    const cmd = client.commands.get(command);
    // If that command doesn't exist, silently exit and do nothing
    if (!cmd) {
        return message.channel.send(`☂ This command does not exist, please refer to ->help for a concise list!`)
    };


    // TODO: FIX ONE DAY
    if (message.content.indexOf(client.config.prefix) === 0) {
              // command cooldown
              if (talkedRecently.has(message.author.id) && (message.client.config.miaID)) {
                return message.channel.send("☂ Please wait a little! I can't keep up! " + message.author);
              } else {
          
              talkedRecently.add(message.author.id);
          
              setTimeout(() => {
                talkedRecently.delete(message.author.id);
                }, 5000);
              }
    }

    const level = client.permlevel(message);

    if (level < client.levelCache[cmd.conf.permLevel]) {
        return message.channel.send(`☂ You do not have permission to use this command you oaf!`)
      }
 
    message.author.permLevel = level;

    // Run the command
    
    cmd.run(client, message, args);

  };