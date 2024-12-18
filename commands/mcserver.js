const util = require('minecraft-server-util');
const Discord = require('discord.js');

module.exports = {
    name: 'mcserver',
    aliases: ["mccheck"],
    permissions: ["SEND_MESSAGES"],
    description: 'get information about a minecraft server',
    execute(message, args, cmd, client, Discord) {
        if (!args[0]) return message.channel.send('Please enter a minecraft server ip');
        if (!args[1]) return message.channel.send('Please enter a minecraft server port');

        util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
            console.log(response);
            const embed = new Discord.MessageEmbed()
                .setColor('#D0D5D9')
                .setTitle('Minecraft Server')
                .addFields(
                    { name: '**Server IP**', value: response.host },
                    { name: '**Online Players**', value: response.onlinePlayers },
                    { name: '**Max Players**', value: response.maxPlayers },
                    { name: '**Version**', value: response.version }
                )
                .setFooter('Have a nice day!');

            message.channel.send(embed);
        })
            .catch((error) => {
                message.channel.send('there was an error finding this server');
                throw error;
            })
    }
}