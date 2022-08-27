exports.run = async (client, message, args) => {
    const user = message.mentions.users.first();

    const embed = {
        color: 6894771,
        title: "",
        description: "",
        timestamp: Date.now(),
        footer: {
            text: "Boo's with ❤︎ from Mia"
        }
    }

    if (!user) {
        embed.description = "\`\`\`asciidoc\n";
        embed.description += "Usage: \n"
        embed.description += "->ship + [mention] \n\n"
        embed.description += "> description :: Ships users\n"
        embed.description += "\`\`\`"

        embed.title = "☂ Command help"
        return message.channel.send({ embed })
    }

    if (args.length > 1) {

        message.channel.send("☂ You can only ship one person dummy!")
        message.react('❌')
        
        return
    }

    if (user === message.author) {

        message.channel.send("☂ You can't ship yourself dummy!")
        message.react('❌')

        return
    }

    const percent = Math.round(Math.random() * 101);
    const matchEmbedOverrides = computeMatchEmbedOverrides(percent)
    
    // spread copies params of embed object in new object, then copies match... into the object, overriding any parameters with the same name
    return message.channel.send({ embed: {...embed, ...matchEmbedOverrides} }) 
}

const computeMatchEmbedOverrides = (percent) => {
    if (percent === 100) {

        return {
            title: `:sparkling_heart:`,
            description: `\`\`\`${percent}% || PERFECT LOVE!!!\`\`\``
        }
    }

    if (percent > 90) {
        return {
            title: `:heartpulse:`,
            description: `\`\`\`${percent}% || Kiss kiss kiss! Marry each other already!!\`\`\``
        }
    }

    if (percent > 80) {
        return {
            title: `:heart_decoration:`,
            description: `\`\`\`${percent}% || Invite me to your wedding!!\`\`\``
        }
    }

    if (percent > 70) {
        return {
            title: `:yellow_heart:`,
            description: `\`\`\`${percent}% || Whew, this is getting quite hot!\`\`\``
        }
    }

    if (percent > 60) {
        return {
            title: `<:blue_heart>`,
            description: `\`\`\`${percent}% || You look great together!\`\`\``
        }
    }

    if (percent > 30) {
        return {
            title: `:heart:`,
            description: `\`\`\`${percent}% || Maybe there's something between you!\`\`\``
        }
    }

    if (percent > 10) {
        return {
            title: `:broken_heart:`,
            description: `\`\`\`${percent}% || Friendzone...\`\`\``
        }

    }

    return {
        title: `:broken_heart:`,
        description: `\`\`\`${percent}% || are you even friends?\`\`\``
    }

}

exports.conf = {
    permLevel: "User"
}