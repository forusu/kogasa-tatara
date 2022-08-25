exports.run = (client, message, args) => {
    let choice1 = args[0]
    let choice2 = args[1]
    let choice3 = args[2]

    let choice = Math.round(Math.random()*11)

    if (!args[0] || !args[1]) {
        let description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->pick + [arg1] + [arg2] + [arg3]\n\n"
        description += "> description :: Picks between 2/3 choices\n"
        description += "\`\`\`"
    
        message.channel.send({embed: {
                "color": 6894771, 
                "title": "Command help",
                "description" : description,
                "timestamp": Date.now(),
                "footer": {
                    text: ""
                }}});
    } else if (args[3]) {
        message.react('❌')
        message.channel.send("I can only pick between 3 things NotLikeThis")
    } else if (args[2]) {

        if (choice <= 3) {
            message.channel.send({embed: {
                "color": 6894771,
                "title": "Choice",
                "description" : `\`\`\`${choice1}\`\`\``,
                "timestamp": Date.now(),
                "footer": {
                    text: "Boo's with ❤︎ from Mia"
                }
            }});

        } else if (choice > 3 && choice <= 6) {
            message.channel.send({embed: {
                "color": 6894771, 
                "title": "Choice",
                "description" : `\`\`\`${choice2}\`\`\``,
                "timestamp": Date.now(),
                "footer": {
                    text: "Boo's with ❤︎ from Mia"
                }
        }});
        } else if (choice > 6 && choice <= 10){ 
            message.channel.send({embed: {
                "color": 6894771, 
                "title": "Choice",
                "description" : `\`\`\`${choice3}\`\`\``,
                "timestamp": Date.now(),
                "footer": {
                    text: "Boo's with ❤︎ from Mia"
                }
            }});
        }
    } else if (choice <= 5) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": "Choice",
            "description" : `\`\`\`${choice1}\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else if (choice > 5) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": "Choice",
            "description" : `\`\`\`${choice2}\`\`\``,
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