exports.run = (client, message, user, args) => {

    let imageurl

    if (args == 0) {
        imageurl = message.author.avatarURL
    } else if (message.mentions.users.first()) {
        imageurl = message.mentions.avatarURL
    } else if (message.mentions.users.first() && args[1]) {
        message.channel.send("☂ You can only request an avatar from one user!")
        message.react('❌')
    }
    
    message.react('☂')

    message.channel.send({embed: {
        "color": 6894771, 
        "title": "☂ Here's your avatar!",
        "image": {
            url: imageurl,
        },
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
    }}});

}

exports.conf = {
    permLevel: "User"
}