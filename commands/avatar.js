exports.run = (client, message, args, user) => {

    let imageurl
    const mention = message.mentions.users.first();

    if (!mention) {
        imageurl = message.author.avatarURL
    } else if (mention && args[1]) {
        message.react('❌')
        return message.channel.send("☂ You can only request an avatar from one user!")
    } else if (mention) {
        imageurl = mention.avatarURL
    }

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
    
    message.react('☂')

}

exports.conf = {
    permLevel: "User"
}