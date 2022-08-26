const chalk = require("chalk");
const moment = require("moment");

exports.run = async (client, message, args, user, level) => {

    const timestamp = `[${moment().format("YYYY-MM-DD HH:mm:ss")}]:`;

    const code = args.join(" ");

    // logging for security
    let guild = message.guild
      if (channel.type === ChannelType.DM) {
        guild = "DMs"
      }

    let content = `${chalk.bgRed('EVAL')} by ` + `'${chalk.greenBright(message.author.username)}' ` + `(${chalk.blue(message.author)}) ` + 'in ' + `'${chalk.blue(guild)}'` + ' input: [' + chalk.redBright(code) + ']'
    console.log(`${chalk.bold(timestamp)} ${chalk.bold(content)}`)

    try {
      const evaled = eval(code);
      const clean = await client.clean(client, evaled);

      if (!code) {

        let description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->eval + [code] \n\n"
        description += "> description :: Evaluates JavaScript code\n"
        description += "\`\`\`"
    
        message.channel.send({embed: {
                "color": 6894771, 
                "title": "Command help",
                "description" : description,
                "timestamp": Date.now(),
                "footer": {
                    text: "Boo's with ❤︎ from Mia"
                }}});
      } else {

      let description = "\`\`\`js\n";
      description += clean + "\n";
      description += "\`\`\`";
      

      message.channel.send({embed: {
        "color": 6894771,
        "title": "Code evaluation",
        "description": description,
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }
      }});
      }

    } catch (err) {

      let description = "\`\`\`xl\n";
      description += await client.clean(client, err) + "\n";
      description += "\`\`\`";
      

      message.channel.send({embed: {
        "color": 13632027,
        "title": "Error",
        "description": description,
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }
      }});

      
    }

  };
exports.conf = {
    permLevel: "finesse"
}