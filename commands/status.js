<<<<<<< HEAD
    const { version, EmbedBuilder } = require("discord.js");
    const moment = require("moment");
    require("moment-duration-format");

exports.run = (client, message, args, level) => { // eslint-disable-line no-unused-vars
=======
const { version } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, message) => { // eslint-disable-line no-unused-vars
>>>>>>> a4c6c7cf880c0be1ba98a88eca801f5c4a2b343e
    const dur = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)
   // const memfr = 
    const usr = client.users.cache.size
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

<<<<<<< HEAD

    const status = new EmbedBuilder()
	.setColor(6894771)
	.setTitle('My statistics!')
	.setDescription(description)
	.setTimestamp()
	.setFooter({ text: "Boo's with ❤︎ from Mia"});

   message.channel.send({ embeds: [status] });
=======
    message.channel.send({embed: {
        "color": 6894771, 
        "title": "☂ My statistics!",
        "description" : description,
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }
    }});
>>>>>>> a4c6c7cf880c0be1ba98a88eca801f5c4a2b343e
}

exports.conf = {
    permLevel: "User"
}