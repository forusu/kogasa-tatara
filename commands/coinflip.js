exports.run = (client, message, EmbedBuilder) => {

    let flip = Math.round(Math.random()*10)
    const result = flip < 5 ? `\`\`\`Heads!\`\`\`` : `\`\`\`Tails!\`\`\``
           const coin ={
            color: 6894771, 
            title: "☂ Here's the result!",
            description : result,
            timestamp: new Date().toISOString(),
            footer: {
                text: "Boo's with ❤︎ from Mia"
            }
        };
        message.channel.send({ embeds: [coin]});
}
       
    

exports.conf = {
    permLevel: "User"
}