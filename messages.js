module.exports = (bot, finalName, user) => {
    bot.on('messageCreate', (message) => {
        if (message.author.bot) return;
        if(message.channel.type === 'DM' && finalName == "")
        {
            var regEx = /^(B1|B2|B3|M1|M2 )$/;
            var fullMessage = message.content;
            var found = fullMessage.match(regEx);
            if (found != null)
            {
                console.log(found[0]);
                message.reply(`Ok ! Tu es donc en ${found[0]}. Peux-tu me donner ton prénom ? (Ne te trompes pas, tu ne pourras plus le modifier)`);
                finalName += found[0];
                classe = found[0];
            }
            else
            message.reply("Ton message ne m'a pas l'air valide :(");
        }
        else if (message.channel.type === 'DM' && finalName != "")
        {
            regEx = /^\b([a-zA-Z]+)\b/gi;
            fullMessage = message.content;
            console.log(fullMessage);
            found = fullMessage.match(regEx);
            console.log(found);
            if (found != null)
            {
                console.log(found);
                finalName += " " + found;
                message.reply(`Tout est bon ! Tu t'appelleras donc ${finalName}.`);
                console.log("finalName : " + finalName);
                user.setNickname(finalName);
                switch (classe) {
                    case 'B1':
                        user.roles.set(['895387658455490632'])
                        break;
                    case 'B2' :
                        user.roles.set(['895387693251440741']);
                        break;
                    case 'B3' :
                        user.roles.set(['895387722066325554']);
                        break;
                    case 'M1' :
                        user.roles.set(['895387725685985361']);
                        break;
                    case 'M2' :
                        user.roles.set(['895387769424207952']);
                        break;
                }
                count++;
                finalName = "";
            }
            else 
            {
                message.reply("Ton message ne m'a pas l'air valide :(");
            }
        }
    })
}