const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.GuildVoiceStates,
      GatewayIntentBits.MessageContent
  ]
});
const config = require("./config.js");
client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);



client.config = config;
client.EmbedBuilder = EmbedBuilder;

  //On ready event handler, does stuff on the ready event!!!!!!
  client.on("ready", () => {



    console.log("☂ initialisation complete!")

    if (client.guilds.size < 2) {
      console.log(`☂ Ready to spread terror and fear on ${client.users.cache.size} members of a single server!`);
    } else {
      console.log(`☂ Ready to spread terror and fear on ${client.users.cache.size} members from ${client.guilds.cache.size} servers!`);  
    }

    client.user.setPresence({
      game: {
          name: "with humans!",
          type: 'PLAYING'
      }
    });

    client.user.setStatus("dnd");
  });

  //Preventing errors and warnings from crashing the bot
  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  //client.on("debug", (e) => console.info(e));  -  debug and heartbeat stuff, fucking useless just like me


  fs.readdir("./events/", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
      });
    });
    
    client.commands = new Enmap();

    fs.readdir("./commands/", (err, files) => {
      if (err) return console.error(err);
      files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`${commandName} loaded`);
        client.commands.set(commandName, props);
      });
    });

    client.levelCache = {};
    for (let i = 0; i < client.config.permLevels.length; i++) {
      const thisLevel = client.config.permLevels[i];
      client.levelCache[thisLevel.name] = thisLevel.level;
    }

    client.login(client.config.token);


