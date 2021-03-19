const Discord = require('discord.js');

module.exports = {
    name: 'help',
    permissions: ["SEND_MESSAGES"],
    description: "This command sends medkits and bandages!",
    async execute(message, args, cmd, client, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('Help')
            .setDescription('Sends medkits and bandages!')
            .addFields(
                { name: '✨ General Commands', value: "\n**#ping** - Checks if I am alive.\n**#youtube** - Sends my dad's YouTube channel link.\n**#mcserver** - Checks the minecraft server status!\nExample - #mcserver blocksmc.com 25565\n**#avatar** - Sends your or mentioned users' profile picture/avatar!" },
                { name: '✨ Music Commands', value: "\n**#play** - I search a video on YouTube then play it back as an audio in a voice channel.\n**#leave** - I stop the audio playback and leave the voice channel." },
                { name: '✨ Admin Commands', value: "\n**#mute** - I stop the weirdo from texting.\n**#unmute** - I let that weirdo to text.\n**#ban** - I strike Thor's hammer on the weirdo.\n**#kick** - I kick the weirdo outta my house." },
            )
            .setImage('https://cdn.discordapp.com/attachments/530277667119824917/820529573334351884/nearbot.jpg')
            .setFooter("Have a nice day!");
        message.channel.send(helpEmbed);
    }
}



