exports.run = (client, message) => {

    let hot = Math.round(Math.random()*10)

    if (hot < 5) {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": "☂ I flipped the coin!",
            "description" : `\`\`\`Heads!\`\`\``,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});
    } else {
        message.channel.send({embed: {
            "color": 6894771, 
            "title": "☂ Here's the result!",
            "description" : `\`\`\`Tails!\`\`\``,
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