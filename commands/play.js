const Discord = require('discord.js');

module.exports = {
    name: 'ping',
    permissions: ["SEND_MESSAGES"],
    description: "This is a ping command!",
    async execute(message, args, cmd, client, Discord) {
       const music = args.join(" ");

       client.distube.play(message, music)
    }
}