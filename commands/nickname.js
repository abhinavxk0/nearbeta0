const Discord = require('discord.js');

module.exports = {
    name: 'nickname',
    permissions: ["MANAGE_NICKNAME", "CHANGE_NICKNAME"],
    description: "nick change",
    async execute(message, args, cmd, client, Discord) {
        let user = message.mentions.users.first();
        if (!user) return message.channel.send("Mention a user!");

        let nick = args.slice(1).join(" ");
        if (!nick) return message.channel.send("Input nick!")

        let member = message.guild.members.cache.get(user.id);

        await member.setNickname(nick);
        return message.channel.send(`Successfully changed **${user.tag}** nickname to **${nick}`)

    }
}