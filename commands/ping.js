const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    description: "This is a ping command!",
    async execute(message, args, cmd, client, Discord) {
        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('✨ Pong!')
            .setFooter("✨ Have a nice day!");
        message.channel.send(exampleEmbed);
    }
}