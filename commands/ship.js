exports.run = async (client, message, args) => {

    const author = message.author;
    const user = message.mentions.users.first();
    const percent = Math.round(Math.random()*101);
    let description

    if (!user) {

        description = "\`\`\`asciidoc\n";
        description += "Usage: \n"
        description += "->ship + [mention] \n\n"
        description += "> description :: Ships users\n"
        description += "\`\`\`"

        title = "☂ Command help"


    } else if (message.mentions.users.first() && args[1]) {

        message.channel.send("☂ You can only ship one person dummy!")
        message.react('❌')
        return

    } else if (user === author) {

        message.channel.send("☂ You can't ship yourself dummy!")
        message.react('❌')
        return

    } else if (percent < 10) {

            title = `:broken_heart:`
            description = `\`\`\`${percent}% || are you even friends?\`\`\``

    } else if (percent > 10 && percent < 30) {

            title = `:broken_heart:`
            description = `\`\`\`${percent}% || Friendzone...\`\`\``

    } else if (percent > 30 && percent < 60) {

            title = `:heart:`
            description = `\`\`\`${percent}% || Maybe there's something between you!\`\`\``

    } else if (percent > 60 && percent < 70) {

            title = `"<:heart_blue:691969903661416470>`
            description = `\`\`\`${percent}% || You look great together!\`\`\``

    } else if (percent > 70 && percent < 80) {

            title = `:yellow_heart:`
            description = `\`\`\`${percent}% || Whew, this is getting quite hot!\`\`\``

    } else if (percent > 80 && percent < 90) {

            title = `:heart_decoration:`
            description = `\`\`\`${percent}% || Invite me to your wedding!!\`\`\``

    } else if (percent > 90 && percent < 99) {

            title = `:heartpulse:`
            description = `\`\`\`${percent}% || Kiss kiss kiss! Marry each other already!!\`\`\``

    } else if (percent === 100) {

            title = `:sparkling_heart:`
            description = `\`\`\`${percent}% || PERFECT LOVE!!!\`\`\``

    }

    await message.channel.send({embed: {
        "color": 6894771, 
        "title": title,
        "description" : description,
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }
    }})

}

exports.conf = {
    permLevel: "User"
}

