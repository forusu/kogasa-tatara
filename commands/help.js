exports.run = (client, message) => {

    let description = "\`\`\`asciidoc\n";
    description += "Base commands: \n";
    description += `>     ${client.config.prefix}ping :: Calculates response time \n`;
    description += `>   ${client.config.prefix}status :: Shows basic bot stats\n`;
    description += `>     ${client.config.prefix}stus :: ok I type stus\n`;
    description += `>   ${client.config.prefix}avatar :: Gets you a user's avatar!\n`;
    description += `>     ${client.config.prefix}user :: Outputs the user info!\n`;
    description += `>     ${client.config.prefix}help :: Outputs a list of commands\n`;
    description += `>     ${ client.config.prefix}pick :: Picks a choice out of 2/3\n`;
    description += `> ${client.config.prefix}coinflip :: Heads or tails!\n`;
    description += `>   ${client.config.prefix}kogasa :: Kogasa Tatara is a karak-\n`;
    description += `>     ${client.config.prefix}embc :: create an embed!\n`;
    description += "\n";
    description += "Cute commands: \n";
    description += `>     ${client.config.prefix}hug :: Hug someone!\n`;
    description += `>     ${client.config.prefix}pat :: Pat someone!\n`;
    description += `>    ${client.config.prefix}ship :: Check your love percentage with someone\n`;
    description += "\n";
    description += "Owner commands: \n";
    description += `>     ${client.config.prefix}set :: Sets things\n`;
    description += `>  ${client.config.prefix}reboot :: Reboots the bot\n`;
    description += `>     ${client.config.prefix}say :: Makes the bot talk\n`;
    description += "\`\`\`"

   const help ={
    color: 6894771, 
    title: "☂ List of my commands!",
    description : description,
    timestamp: new Date().toISOString(),
    footer: {
        text: "Boo's with ❤︎ from Mia"
    }
};
message.channel.send({ embeds: [help]});

}

exports.conf = {
    permLevel: "User"
}