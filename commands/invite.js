const Discord = require("discord.js");

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    permissions: ["CREATE_INSTANT_INVITE"],
    description: "Invite for the server!",
    async execute(message, args, cmd, client, Discord) {
        const inviteEmbed = new Discord.MessageEmbed()
            .setColor('#D0D5D9')
            .setTitle('Click here to join!')
            .setURL('https://discord.gg/nuF6yNaSn4')
            .addFields(
                { name: 'JOIN!', value: 'ill give u a cookie if u tell your friends join ;)'}
            )
            .setThumbnail('https://cdn.discordapp.com/attachments/530277667119824917/821650726782107658/serverlogo2.jpg')
            
        message.channel.send(inviteEmbed);

    }
}