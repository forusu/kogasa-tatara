exports.run = (client, message) => {

    let flip = Math.round(Math.random()*10)
    const result = flip < 5 ? `\`\`\`Heads!\`\`\`` : `\`\`\`Tails!\`\`\``

            message.channel.send({embed: {
            "color": 6894771, 
            "title": "☂ Here's the result!",
            "description" : result,
            "timestamp": Date.now(),
            "footer": {
                text: "Boo's with ❤︎ from Mia"
            }
        }});

}

exports.conf = {
    permLevel: "User"
}