exports.run = (client, message, args) => {

    let input = args.join(" ");
    let cipherLength = input.length

    if (args.length == 0) {

        message.react('❌')
        message.channel.send("☂ I cannot encode a Null message.")

        return
    }

    // fixing the commit

    var obj = {
        table: []
    };

    const inCh = Array.from(input);
    let cipherText = []
    inCh.forEach(element => cipherText.push(element.charCodeAt(0)))

    function generateKey() {

        const key = []

        for (let i = 0; i < cipherLength; i++) {
            var number = Math.round(Math.random()*100)
            key.push(number)
        }
        return key
    }

    function encode() {

        key = generateKey()

        let cipher = cipherText.map((num, i) => (num+key[i]))

        obj.table.push({cipherKey: key, lastTransmission: cipher});

        return cipher
        
    }

    message.channel.send(`${encode()}`.replaceAll(',', ' '))

    var json = JSON.stringify(obj);
    var fs = require('fs');
    fs.writeFile('cipher.json', json, 'utf8', function(err, result){ if(err) console.log('error', err); });
    
}

exports.conf = {
    permLevel: "finesse"
}