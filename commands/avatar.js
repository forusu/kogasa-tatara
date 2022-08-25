exports.run = (client, message, user, args) => {

    let imageurl = message.author.avatar
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