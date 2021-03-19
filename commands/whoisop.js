const { execute } = require("./youtube");

module.exports = {
    name: 'whoisop',
    aliases: ['opcheck'],
    permissions: ["SEND_MESSAGES"],
    description: "Op check!",
    execute(message, args, cmd, client, Discord) {
        message.reply("You are!")
    }

}