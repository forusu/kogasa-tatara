
    const { version } = require("discord.js");
    const moment = require("moment");
    require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars

    const dur = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
   // const memfr = 
    const usr = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)
    const ser = client.guilds.cache.size
    const chn = client.channels.cache.size
    const ver = version

    let description = "\`\`\`asciidoc\n";
    description += "> Memory usage :: " + mem + "MB\n";
 //   description += ">  Free memory :: " + memfr + "GB\n";
    description += ">       Uptime :: " + dur + "\n";
    description += ">      Servers :: " + ser + "\n";
    description += ">        Users :: " + usr + "\n";
    description += ">     Channels :: " + chn + "\n";
    description += ">   Discord.js :: " + "v" + ver + "\n";
    description += "\`\`\`";


    const status ={
        color: 6894771, 
        title: "☂ My statistics!",
        description : description,
        timestamp: new Date().toISOString(),
        footer: {
            text: "Boo's with ❤︎ from Mia"
        }
    };
    message.channel.send({ embeds: [status]});

    }
exports.conf = {
    permLevel: "User"
}
