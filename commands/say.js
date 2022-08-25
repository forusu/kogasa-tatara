exports.run = (client, message, args) => {

    let say = args.join(" ");
    

    if (!say) {

        let description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->say + [text]\n\n"
        description += "> description :: Says something in chat\n"
        description += "\`\`\`"
    
        message.channel.send({embed: {
                "color": 16720165, 
                "title": "Command help",
                "description" : description,
                "timestamp": Date.now(),
                "footer": {
                    text: "Boo's with ❤︎ from Mia"
                }}});
    } else {
        message.channel.send(`☂ ${say}`)
        console.log(`${say}`)
    }

}

exports.conf = {
    permLevel: "finesse"
}