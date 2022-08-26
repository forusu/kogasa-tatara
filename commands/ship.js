exports.run = (client, message, args) => {
    const author = message.author;
    const user = message.mentions.users.first();
    const percent = Math.round(Math.random()*101);

    if (!user) {

            let description = "\`\`\`asciidoc\n";
            description += "Usage: \n"
            description += "cc!ship + [mention] \n\n"
            description += "> description :: Ships users\n"
            description += "\`\`\`"
        
            message.channel.send({embed: {
                    "color": 15959241, 
                    "title": "☂ Command help",
                    "description" : description,
                    "timestamp": Date.now(),
                    "footer": {
                        text: "Boo's with ❤︎ from Mia"
                    }}});

    } else if (message.mentions.users.first() && args[1]) {
        message.channel.send("☂ You can only ship one person dummy!")
        message.react('❌')
    } else if (user === author) {
        message.channel.send("☂ You can't ship yourself dummy!")
        message.react('❌')
    } else if (percent < 10) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":broken_heart:",
            "description" : `\`\`\`${percent}% || are you even friends?\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent > 10 && percent < 30) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":broken_heart:",
            "description" : `\`\`\`${percent}% || Friendzone...\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent > 30 && percent < 60) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":heart:",
            "description" : `\`\`\`${percent}% || Maybe there's something between you!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent > 60 && percent < 70) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": "<:heart_blue:691969903661416470>",
            "description" : `\`\`\`${percent}% || You look great together!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent > 70 && percent < 80) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":yellow_heart:",
            "description" : `\`\`\`${percent}% || Whew, this is getting quite hot!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent > 80 && percent < 90) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":heart_decoration:",
            "description" : `\`\`\`${percent}% || Invite me to your wedding!!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent > 90 && percent < 99) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":heartpulse:",
            "description" : `\`\`\`${percent}% || Kiss kiss kiss! Marry each other already!!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (percent === 100) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": ":sparkling_heart:",
            "description" : `\`\`\`${percent}% || PERFECT LOVE!!!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    }


}

exports.conf = {
    permLevel: "User"
}

