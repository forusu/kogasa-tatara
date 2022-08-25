exports.run = (client, user, message, args) => {

    let imageurl = user.avatar 

    message.channel.send({embed: {
        "color": 6894771, 
        "title": "☂ Here's your avatar!",
        "description" : description,
        "image": {
            url: imageurl,
        },
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }}});

}