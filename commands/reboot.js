exports.run = async (client, message) => {

    let rng = Math.round(Math.random()*10)
    let msg = "☂ Rebooting!"

    if (rng <= 2) {
        msg = "☂ I'm being rebooted!";
    } else if (rng > 2 && rng < 4) {
        msg = "☂ change da world, this is my final mes sage, goo bye";
    } else if (rng > 4 && rng < 6) {
        msg = "☂ Help me! Reimu is banishing me!!";
    } else if (rng > 6 && rng < 8) {
        msg = "☂ Nooo, plea-";
    } else if (rng > 8 && rng <= 10) {
        msg = "☂ tarara parara karaka sarara tatara tarara parara karaka sarara tatara ☂";
    }
    
    await message.channel.send(msg)

    process.exit(1)
}

exports.conf = {
    permLevel: "finesse"
}