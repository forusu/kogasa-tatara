exports.run = (client, message, args) => {


    let say = args.join(" ");

    message.channel.send({embed: {
        "color": 6894771,
        "title": "☂ Here is your embed!",
        "description": say,
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }
        
      
    }});
}

exports.conf = {
    permLevel: "User"
}