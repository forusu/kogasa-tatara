exports.run = (client, message, args) => {

    let input = args.join(' ').split(' ');

    if (args.length == 0) {

        message.react('❌')
        message.channel.send("☂ I cannot decode a Null message.")

        return
    }

    let strInput = input
    let length = strInput.length
    let numInput = []

    for (var i = 0; i < length; i++)
 
    numInput.push(parseInt(strInput[i]));

    var fs = require('fs');
    let key

    fs.readFile('cipher.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);

        key = obj.table[0].cipherKey
        
        }

        function decode() {

            let cipher = numInput.map((num, i) => num - key[i])

            return cipher

        }
    
        const decodedText = Array.from(decode());
        let cipherText = []
        decodedText.forEach(element => cipherText.push(String.fromCharCode(element)))
        
    
        const embed = {
            color: 6894771, 
            title: "☂ The deciphered text: ",
            description : `\`\`\`${cipherText}\`\`\``.replaceAll(',', ' '),
            timestamp: new Date().toISOString(),
            footer: {
                text: "Boo's with ❤︎ from Mia"
            }};
    
        message.channel.send({ embeds: [embed]});

    })

   

}



exports.conf = {
    permLevel: "finesse"
}