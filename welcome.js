module.exports = (bot, utilisateur) => {
    bot.on('guildMemberAdd', (member) => {
        member.send(`Bonjour ${member.user.username}, je suis un bot (en phase de tests) développé par les deuxièmes années informatique. Afin que je puisse te renommer correctement sur le serveur, peux-tu m'indiquer ton niveau d'étude (B1/B2/B3/M1/M2) ?`);
        return utilisateur = member;
    })
}