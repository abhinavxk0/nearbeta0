const message = require("../events/guild/message");
const Discord = require('discord.js');

module.exports = {
    name: 'clear',
    aliases: ['purge'],
    permissions: ["MANAGE_MESSAGES"],
    description: "Clears messages!",
    async execute(message, args, cmd, client, Discord) {

        const clearoneEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('✨ Please enter the amount of messages to be cleared!')
            .setFooter('✨ Have a nice day!');

        const cleartwoEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('✨ Please enter the amount of messages to be cleared!')
            .setFooter('✨ Have a nice day!');

        const clearthreeEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('✨ You cant remove more than a 100 messages!')
            .setFooter('✨ Have a nice day!');

        const clearfourEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle("✨ You need to remove at least 1 message!")
            .setFooter('✨ Have a nice day!');

        if (!args[0]) return message.reply(clearoneEmbed);
        if (isNaN(args[0])) return message.reply(cleartwoEmbed);
        if (args[0] > 100) return message.reply(clearthreeEmbed);
        if (args[0] < 1) return message.reply(clearfourEmbed);
        await message.channel.messages.fetch({ limit: args[0] }).then(messages => {
            message.channel.bulkDelete(messages)
        });
        const clearEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('✨ The amount of messages has been deleted successfully!')
            .setFooter('✨ Have a nice day!');
        message.channel.send(clearEmbed);
    }
}


