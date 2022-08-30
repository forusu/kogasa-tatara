exports.run = (client, message, args) => {

    let say = args.join(" ");

    const embed = {
        color: 6894771,
        title: "☂ Here is your embed!",
        description: say,
        timestamp: new Date().toISOString(),
        footer: {
            text: "Boo's with ❤︎ from Mia"
        }
    };
    return message.channel.send({ embeds: [embed]});
}

exports.conf = {
    permLevel: "User"
}