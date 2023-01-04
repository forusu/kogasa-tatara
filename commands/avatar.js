exports.run = (client, message, args) => {

    let imageurl
    const author = message.author
    const mention = message.mentions.users.first();

    function oneUser() {
        message.react('❌')
        return message.channel.send("☂ You can only request an avatar from one user!")
    }

    !mention ? imageurl = author.avatarURL({size: 256})
    : mention && args[1] ? oneUser()
    : imageurl = mention.avatarURL({size: 256})

   message.react('☂');
   const embed = { 
    color: 6894771,
    title: "☂ Here's your avatar!",
    image: {url: imageurl},
    timestamp: new Date().toISOString(),
    footer: { text: "Boo's with ❤︎ from Mia"}
   
};
message.channel.send({ embeds: [embed]});
}

exports.conf = {
    permLevel: "User"
}