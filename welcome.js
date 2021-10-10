module.exports = (bot) => {
    bot.on('messageCreate', (message) => {
        switch (message.content) {
            case "!campusid" : message.reply("C\'est ça le pb");break;
        }
    })
}