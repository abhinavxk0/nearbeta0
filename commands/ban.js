const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    permissions: ["BAN_MEMBERS"],
    description: "This command bans a member!",
    execute(message, args, cmd, client, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            const banoneEmbed = new Discord.MessageEmbed()
                .setColor('#D0D5D9')
                .setTitle('✨ Mentioned user has been banned!')
                .setFooter("✨ Have a nice day!");
            message.channel.send(banoneEmbed);
        } else {
            const bantwoEmbed = new Discord.MessageEmbed()
                .setColor('#D0D5D9')
                .setTitle("✨ You couldn't ban that member!")
                .setFooter('✨ Have a nice day!');
            message.channel.send(bantwoEmbed);
        }
    }
}