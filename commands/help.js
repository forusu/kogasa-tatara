const { EmbedBuilder } = require("discord.js");
exports.run = (client, message) => {

    let description = "\`\`\`asciidoc\n";
    description += "Base commands: \n";
    description += ">   ->ping :: Calculates response time \n";
    description += "> ->status :: Shows basic bot stats\n";
    description += "> ->avatar :: Gets you a user's avatar!\n";
    description += ">   ->user :: Outputs the user info!\n";
    description += ">   ->help :: Outputs a list of commands\n";
    description += ">   ->pick :: Picks a choice out of 2/3\n";
    description += "->coinflip :: Heads or tails!\n";
    description += "> ->kogasa :: Kogasa Tatara is a karak-\n";
    description += ">   ->embc :: create an embed!\n";
    description += "\n";
    description += "Cute commands: \n";
    description += ">    ->hug :: Hug someone!\n";
    description += ">    ->pat :: Pat someone!\n";
    description += ">   ->ship :: Check your love percentage with someone\n";
    description += "\n";
    description += "Owner commands: \n";
    description += ">    ->set :: Sets things\n";
    description += "> ->reboot :: Reboots the bot\n";
    description += ">    ->say :: Makes the bot talk\n";
    description += "\`\`\`"

    const help = new EmbedBuilder()
	.setColor(6894771)
	.setTitle('☂ List of my commands!')
	.setDescription(description)
	.setTimestamp()
	.setFooter({ text: "Boo's with ❤︎ from Mia"});

   message.channel.send({ embeds: [help] });

}

exports.conf = {
    permLevel: "User"
}