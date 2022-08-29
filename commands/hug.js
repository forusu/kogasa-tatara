exports.run = (client, message, args) => {

    const author = message.author;
    const mention = message.mentions.users.first();

    function toHug() {
        message.channel.send("☂ Mention someone to hug!")
        message.react('❌')
    }
    function hugOne() {
        message.channel.send("☂ You can only hug one!")
        message.react('❌')
    }

    !mention ? toHug()
    : mention && args[1] ? hugOne() 
    : message.channel.send(`☂ ${author} hugged ${mention} cuteee!`)

}

exports.conf = {
    permLevel: "User"
}