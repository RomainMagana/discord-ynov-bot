module.exports = (bot) => {
    bot.on('messageCreate', (msg) => {
        if (msg.author.bot) return;

        if (msg.content === "!embed") {
            console.log("pipi")
            const embed = new MessageEmbed()
                .setTitle("**Sélection de role**")
                .setColor("#0099ff")
                .setAuthor("Ynov Bot", "https://media-exp1.licdn.com/dms/image/C4D0BAQGdnt60vH7Yig/company-logo_200_200/0/1623666565772?e=2159024400&v=beta&t=1blOgXGMUFMv8NvJTa0uiFMggNXFZFHhj3ytjs2QDZk")
                .setDescription("Choisissez votre rôle :\n\n" +
                    "<:B1informatique:894327162369372170> : Informatique\n\n" +
                    "<:B1jeuxvideo:894327162163826698> : Jeux vidéos & Animation\n\n" +
                    "<:B1audiovisuel:894327162138677298> : Audiovisuel \n\n" +
                    "<:B1marketing:894327162214166648> : Marketing \n\n" +
                    "<:B1designManagement:894327161887027231> : Design & Management\n\n\n")
            msg.channel.send({embeds : [embed]}).then(embedMessage => {
                embedMessage.react("<:B1informatique:894327162369372170>");
                embedMessage.react("<:B2informatique:894329626489389096>");
                embedMessage.react("<:B3informatique:894329626439077898>");
                embedMessage.react("<:B1jeuxvideo:894327162163826698>");
                embedMessage.react("<:B1audiovisuel:894327162138677298>");
                embedMessage.react("<:B1marketing:894327162214166648>");
                embedMessage.react("<:B1designManagement:894327161887027231>");
            });
        }
    });
}

