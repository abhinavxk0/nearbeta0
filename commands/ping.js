const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    description: "This is a ping command!",
    async execute(message, args, cmd, client, Discord) {
        message.channel.send("Pong!");
    }
}