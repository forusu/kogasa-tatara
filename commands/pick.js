exports.run = (client, message, args) => {

    let choice1 = args[0]
    let choice2 = args[1]
    let choice3 = args[2]

    let description
    let title
    let choice = Math.round(Math.random()*11)

    picker = () => {

        return choice <= 3 ? desc = `\`\`\`${choice1}\`\`\``
            : choice > 3 && choice <= 6 ? desc = `\`\`\`${choice2}\`\`\``
            : choice > 6 && choice <= 10 ? desc = `\`\`\`${choice3}\`\`\``
            : choice <= 5 ? desc = `\`\`\`${choice1}\`\`\``
            : desc = `\`\`\`${choice2}\`\`\``

    }

    if (args.length == 0) { 

        description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->pick + [arg1] + [arg2] + [arg3]\n\n"
        description += "> description :: Picks between 2/3 choices\n"
        description += "\`\`\`"

        title = "☂ Command help"

    } else if (args[3]) {

        message.react('❌')
        message.channel.send("☂ I can only pick between 3 things NotLikeThis")

    } else if (args[2]) {

        title = "☂ Here's my choice!"
        description = picker()

    }

    message.channel.send({embed: {
        "color": 6894771, 
        "title": title,
        "description" : description,
        "timestamp": Date.now(),
        "footer": { text: "Boo's with ❤︎ from Mia"}  
    }}); 

}

exports.conf = { 
    permLevel: "User"
}