exports.run = (client, message, args) => {

    let imageurl
    const author = message.author
    const mention = message.mentions.users.first();

    function oneUser() {
        message.react('❌')
        return message.channel.send("☂ You can only request an avatar from one user!")
    }

    !mention ? imageurl = author.avatarURL.slice(0, author.avatarURL.indexOf('?')) +"?size=256"
    : mention && args[1] ? oneUser()
    : imageurl = mention.avatarURL.slice(0, mention.avatarURL.indexOf('?')) + "?size=256"

    message.react('☂')
    message.channel.send({embed: {

        "color": 6894771, 
        "title": "☂ Here's your avatar!",
        "image": {url: imageurl},
        "timestamp": Date.now(),
        "footer": { text: "Boo's with ❤︎ from Mia"}

    }});

}

exports.conf = {
    permLevel: "User"
}