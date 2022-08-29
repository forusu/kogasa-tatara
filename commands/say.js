exports.run = (client, message, args) => {

    let say = args.join(" ");
    

    if (!say) {

        let description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->say + [text]\n\n"
        description += "> description :: Says something in chat\n"
        description += "\`\`\`"
    
        const embed = {
                color: 16720165, 
                title: "☂ Command help",
                description : description,
                timestamp: new Date().toISOString(),
                footer: {
                    text: "Boo's with ❤︎ from Mia"
                }};
        message.channel.send({ embeds: [embed]});

    } else {
        message.channel.send(`☂ ${say}`)
        console.log(`${say}`)
    }

}

exports.conf = {
    permLevel: "finesse"
}