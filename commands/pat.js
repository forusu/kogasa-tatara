exports.run = (client, message, args) => {
    const author = message.author;
    const user = message.mentions.users.first();

    if (!user) {
        message.channel.send("☂ Mention someone to pat!")
        message.react('❌')
    } else if (message.mentions.users.first() && args[1]) {
        message.channel.send("☂ You can only pat one!")
        message.react('❌')
    } else {
        message.channel.send(`☂ ${author} patpatted ${user} cutecutecutecute!`)
    }


    
}

exports.conf = {
    permLevel: "User"
}