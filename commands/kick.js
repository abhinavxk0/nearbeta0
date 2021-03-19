const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    aliases: 'ki',
    permissions: ["KICK_MEMBERS"],
    description: "This command kicks a member!",
    execute(message, args, cmd, client, Discord) {

        const kickoneEmbed = new Discord.MessageEmbed()
            .setColor('##D0D5D9')
            .setTitle('✨ Mentioned user has been kicked!')
            .setFooter('✨ Have a nice day!');

        const kicktwoEmbed = new Discord.MessageEmbed()
            .setColor('##D0D5D9')
            .setTitle("✨ You couldn't kick that member!")
            .setFooter('✨ Have a nice day!');

        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(kickoneEmbed);
        } else {
            message.channel.send(kicktwoEmbed);
        }
    }
}
