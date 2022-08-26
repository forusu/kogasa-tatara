const Discord = require("discord.js");
const Enmap = require("enmap");
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config.js");
client.logger = require("./modules/Logger");
require("./modules/functions.js")(client);
client.config = config;


  //On ready event handler, does stuff on the ready event!!!!!!
  client.on("ready", () => {
    console.log("☂ initialisation complete!")

    if (client.guilds.size < 2) {
      console.log(`☂ Ready to spread terror and fear on ${client.users.size} members of a single server!`);
    } else {
      console.log(`☂ Ready to spread terror and fear on ${client.users.size} members from ${client.guilds.size} servers!`);  
    }

    client.user.setStatus("dnd");
    client.user.setPresence({
      game: {
          name: "with humans!",
          type: 'PLAYING'
      }
    });

    // talk events
  client.on('message', message => {
    switch (message.content.toLowerCase()) {
      case "cirno": 
        message.channel.send("☂ gremlin..")
        break;
      case "kogasa":
        message.channel.send("☂ the karakasa obake?")
        break;
      case "reimu":
        message.channel.send("☂ she's scarier than me...")
        break;
      case "utsuho":
        message.channel.send("☂ bird brain")
        break;
    }

  })

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


