exports.run = (client, message, args) => {

    let choice1 = args[0]
    let choice2 = args[1]
    let choice3 = args[2]

    let description
    let title
    let choice = Math.round(Math.random()*11)

    picker = () => {

        args.length == 3 ?
  
            choice <= 3 ? desc = `\`\`\`${choice1}\`\`\``
            : choice > 3 && choice <= 6 ? desc = `\`\`\`${choice2}\`\`\``
            : desc = `\`\`\`${choice3}\`\`\``

        :
            choice <= 5 ? desc = `\`\`\`${choice1}\`\`\``
            : desc = `\`\`\`${choice2}\`\`\``

        return desc
    }

    if (args.length == 0) { 

        description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->pick + [arg1] + [arg2] + [arg3]\n\n"
        description += "> description :: Picks between 2/3 choices\n"
        description += "\`\`\`"

        title = "☂ Command help"
    }

    if (args.length > 3) {

        message.react('❌')
        message.channel.send("☂ I can only pick between 3 things NotLikeThis")

        return
    }

    if (args.length >= 2) {

        title = "☂ Here's my choice!"
        description = picker()

    }

    const embed = {
        color: 6894771, 
        title: title,
        description : description,
        timestamp: new Date().toISOString(),
        footer: { text: "Boo's with ❤︎ from Mia"}  
    };
    message.channel.send({ embeds: [embed]});

}

exports.conf = { 
    permLevel: "User"
}