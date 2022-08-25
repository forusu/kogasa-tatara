exports.run = (client, message, args) => {

    const author = message.author;
    const user1 = message.mentions.users.first();

    if (!user1) {
        message.channel.send("☂ Mention someone to hug!")
        message.react('❌')
    } else if (message.mentions.users.first() && args[1]) {
        message.channel.send("☂ You can only hug one!")
        message.react('❌')
    } else if (user1) {
        message.channel.send(`☂ ${author} hugged ${user1} cuteee!`)
    }


    
}

exports.conf = {
    permLevel: "User"
}