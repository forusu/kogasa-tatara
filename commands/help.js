exports.run = (client, message, args) => {

    let description = "\`\`\`asciidoc\n";
    description += "Base commands: \n";
    description += ">   ->ping :: Calculates response time \n";
    description += "> ->status :: Shows basic bot stats\n";
    description += ">   ->help :: Outputs a list of commands\n";
    description += ">   ->pick :: Picks a choice out of 2/3\n";
    description += "->coinflip :: Heads or tails!\n";
    description += "> ->kogasa :: Kogasa Tatara is a karak-\n";
    description += "\n";
    description += "Cute commands: \n";
    description += ">    ->hug :: Hug someone!\n";
    description += ">    ->pat :: Pat someone!\n";
    description += ">   ->ship :: Check your love percentage with someone\n";
    description += "\n";
    description += "Owner commands: \n";
    description += ">   ->eval :: Evaluates JS code\n";
    description += ">    ->set :: Sets things\n";
    description += "> ->reload :: Reloads a command\n";
    description += "> ->reboot :: Reboots the bot\n";
    description += ">    ->say :: Makes the bot talk\n";
    description += "\`\`\`"

    message.channel.send({embed: {
        "color": 6894771, /* 15959241 */
        "title": "List of commands",
        "description": description,
        "timestamp": Date.now(),
        "footer": {
            text: "Boo's with ❤︎ from Mia"
        }
        
      
    }});
}

exports.conf = {
    permLevel: "User"
}