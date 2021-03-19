module.exports = {
    name: 'youtube',
    aliases: ['yt'],
    permissions: ["SEND_MESSAGES"],
    description: "Sends the YouTube link!",
    execute(message, args, cmd, client, Discord) {
        const youtubeEmbed = new Discord.MessageEmbed()
            .setColor('#FF0000')
            .setTitle ('Subscribe!')
            .setURL('https://www.youtube.com/channel/UC8UEJNSft5XhU0EOMPTIxNQ')
            .setDescription("My dad's YouTube channel. He told me if you subscribe you will get a cookie. I got one, my dad's legit!")
            .setThumbnail("https://cdn.discordapp.com/attachments/530277667119824917/821584902972506162/profilepicture.jpg")
        message.channel.send(youtubeEmbed);

    }
}