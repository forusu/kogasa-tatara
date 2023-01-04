exports.run = async (client, message, args) => {

    var fs = require('fs');

    let trm

    fs.readFile('cipher.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);

        trm = obj.table[0].lastTransmission

        }

        const embed = {
            // color: 6894771, 
            color: 00000, 
            title: "📻 TRANSMISSION 📻",
            description : `\`\`\`ACHTUNG! ACHTUNG!\n\n${trm}\n\n${trm}\n\n${trm}\n\n${trm}\n\n${trm}\`\`\``.replaceAll(',', ' '),
            timestamp: new Date().toISOString(),
            footer: {
                text: "Boo's with ❤︎ from Mia"
        }};
    
         message.channel.send({ embeds: [embed]});    
        
    });
    

}

exports.conf = {
    permLevel: "finesse"
}