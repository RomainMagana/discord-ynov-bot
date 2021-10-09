const { Client, Intents, MessageEmbed } = require('discord.js');

const bot = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.DIRECT_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
		Intents.FLAGS.DIRECT_MESSAGE_REACTIONS
	],
	partials : [ 'MESSAGE', 'GUILD_MEMBER','REACTION', 'CHANNEL', 'USER']
});

let classe;
let count = 0;
let arr = [];
let filiere = "";
let concat = [];
concat[0] = "";
let embedId = [];
embedId[0] = "";

//informatique
const B1informatique ="893800681998278686"
const B2informatique ="893802379416305664"
const B3informatique ="893802512338006067"
const M1informatique ="895832213608878131"
const M2informatique ="895832268961112104"

const informatique ="893953296031686717"

//jeuxvideo
const B1jeuxvideo ="893803111905366016"
const B2jeuxvideo ="895832544564609096"
const B3jeuxvideo ="895832611140804650"
const M1jeuxvideo ="895832650961522689"
const M2jeuxvideo ="895832670548947004"

const jeuxvideo ="893953540471549963"

//audiovisuel
const B1audiovisuel ="893805829470421002"
const B2audiovisuel ="895831682295427143"
const B3audiovisuel ="895831568009015336"
const M1audiovisuel ="895832088245321748"
const M2audiovisuel ="895832122412113920"

const audiovisuel ="893953749050085407"

//designmanagement
const B1designmanagement ="893808539313795083"
const B2designmanagement ="895833056487800933"
const B3designmanagement ="895833125333135380"
const M1designmanagement ="895833220585783307"
const M2designmanagement ="895833254568026153"

const designmanagement ="893954055016165398"

//marketing
const B1marketing ="893807132854591538"
const B2marketing ="895832822252711938"
const B3marketing ="895832884542308373"
const M1marketing ="895832914204450887"
const M2marketing ="895832949814095933"

const marketing ="893953932710252544"



// Je créé mon embed, lui donne son titre, couleur, author, description
const embed = new MessageEmbed()
	.setTitle("**Sélection de la filière**")
	.setColor("#0099ff")
	.setAuthor("Ynov Bot", "https://media-exp1.licdn.com/dms/image/C4D0BAQGdnt60vH7Yig/company-logo_200_200/0/1623666565772?e=2159024400&v=beta&t=1blOgXGMUFMv8NvJTa0uiFMggNXFZFHhj3ytjs2QDZk")
	.setDescription("Choisis ta filière :\n\n" +
		"<:informatique:895797291489853500> : Informatique\n\n" +
		"<:jeuxvideo:895797291221418005> : Jeux vidéos & Animation\n\n" +
		"<:audiovisuel:895797291426934784> : Audiovisuel \n\n" +
		"<:designmanagement:895797291221409813> : Marketing \n\n" +
		"<:marketing:895797291460468736> : Design & Management\n\n\n");


bot.on('ready', () => {
	console.log(`Logged in as ${bot.user.tag}!`);
	
});

// On attend qu'un user rejoigne le serveur, on stock son id dans un tableau et on lui envoie un message.
bot.on('guildMemberAdd', async (member) => {
	arr[count] = member.user.id;
	// Voir qui l'id du user qui vient de rejoindre la guilde :
	//console.log("ID du mec qui vient de rejoindre la guilde : " + arr[count]);
	count++;
	await member.send(`Salut ${member.user.username} ! Afin que je puisse te renommer correctement sur le serveur d'Ynov Sophia, peux-tu m'indiquer ton niveau d'étude \`(B1/B2/B3/M1/M2)\` suivi de ton prénom\n\`Exemple : B2 Ynovbot\``);
})

// On attend un message en DM de la part de l'user.
bot.on('messageCreate', async (message) => {
	for (let i = 0; i <= count; i++) {
		if (message.author.id === arr[i] && message.channel.type === "DM") {
			// Affichage de celui qui a envoyé le message :
			//console.log("Expéditeur : " + message.author.username);
			let regEx = /^(B1|B2|B3|M1|M2)\s\b([a-zA-Z]+)\b$/gi;
			let fullMessage = message.content;
			// Affichage du message envoyé par l'expéditeur :
			//console.log("Message : " + fullMessage);
			let found = fullMessage.match(regEx);
			if (found != null) {
				// Affichage du match avec le regex :
				//console.log("Regex : " + found[0]);
				await message.reply(`Ok ! Tu t'appelleras donc : ${found[0]}.`);
				let sent_message = await message.author.send({ embeds: [embed] }).then(embedMessage => {
					// Ca s'effectue, du coup, j'ajoute des réactions
					embedMessage.react("<:informatique:895797291489853500>");
					embedMessage.react("<:jeuxvideo:895797291221418005>");
					embedMessage.react("<:audiovisuel:895797291426934784>");
					embedMessage.react("<:designmanagement:895797291221409813>");
					embedMessage.react("<:marketing:895797291460468736>");
					return embedMessage;
				});
				
				// Affichage de l'id du message embed :
				//console.log("Id du Embed : " + sent_message.id);
				embedId[i] = sent_message.id;

				// On récupère la guilde de l'user : 
				const server = bot.guilds.cache;
				const YnovServ = server.get('895354467858399273');
				// Affichage des infos du server récupéré.
				//console.log("Server : " + YnovServ);

				// On récupère l'user dans la guilde en parcourant tous les users de la guilde : 
				const GMembers = YnovServ.members.cache.get(arr[i]);
				// Affichage du user récupéré.
				//console.log('members : ' + GMembers);

				// On rename le user :
				await GMembers.setNickname(found[0]);

				// On récupère le niveau de l'user (B1/B2...).
				classe = found[0].substring(0, 2);
				concat[i] = classe;
				
				// Gestion des réactions au message embed :
				bot.on('messageReactionAdd', (reaction, user) => {
					// Voir l'id de la réaction au message.
					console.log("Reaction Message : " + reaction.message.id);
					if (user.bot) return;
					
					if (reaction.message.id === embedId[i]) {
						switch (reaction.emoji.name) {
							case "informatique" : filiere = 'informatique'; message.author.send(`Tu es donc en \`${concat[i]} informatique\` !`); break;
							case "jeuxvideo" : filiere = 'jeuxvideo'; message.author.send(`Tu es donc en \`${concat[i]} jeux video\` !`); break;
							case "audiovisuel" : filiere = 'audiovisuel'; message.author.send(`Tu es donc en \`${concat[i]} audiovisuel\` !`); break;
							case "marketing" : filiere = 'designmanagement'; message.author.send(`Tu es donc en \`${concat[i]} design management\` !`); break;
							case "designmanagement" : filiere = 'marketing'; message.author.send(`Tu es donc en \`${concat[i]} marketing\` !`); break;
						}
						concat[i] += filiere;
						// Affichage de la concaténation du niveau + filière.
						//console.log('concat : ' + concat[i]);
						
						// On attribue le rôle correspondant à l'user :
						switch (concat[i]) {
							case 'B1informatique': GMembers.roles.set([B1informatique, informatique]);
								break;
							case 'B2informatique': GMembers.roles.set([B2informatique, informatique]);
								break;
							case 'B3informatique': GMembers.roles.set([B3informatique, informatique ]);
								break;
							case 'M1informatique': GMembers.roles.set([M1informatique, informatique]);
								break;
							case 'M2informatique': GMembers.roles.set([M2informatique, informatique]);
								break;
							case 'B1jeuxvideo': GMembers.roles.set([B1jeuxvideo, jeuxvideo]);
								break;
							case 'B2jeuxvideo': GMembers.roles.set([B2jeuxvideo, jeuxvideo]);
								break;
							case 'B3jeuxvideo': GMembers.roles.set([B3jeuxvideo, jeuxvideo]);
								break;
							case 'M1jeuxvideo': GMembers.roles.set([M1jeuxvideo, jeuxvideo]);
								break;
							case 'M2jeuxvideo': GMembers.roles.set([M2jeuxvideo, jeuxvideo]);
								break;
							case 'B1audiovisuel': GMembers.roles.set([B1audiovisuel, audiovisuel]);
								break;
							case 'B2audiovisuel': GMembers.roles.set([B2audiovisuel, audiovisuel]);
								break;
							case 'B3audiovisuel': GMembers.roles.set([B3audiovisuel, audiovisuel]);
								break;
							case 'M1audiovisuel': GMembers.roles.set([M1audiovisuel, audiovisuel]);
								break;
							case 'M2audiovisuel': GMembers.roles.set([M2audiovisuel, audiovisuel]);
								break;
							case 'B1designmanagement': GMembers.roles.set([B1designmanagement, designmanagement]);
								break;
							case 'B2designmanagement': GMembers.roles.set([B2designmanagement, designmanagement]);
								break;
							case 'B3designmanagement': GMembers.roles.set([B3designmanagement, designmanagement]);
								break;
							case 'M1designmanagement': GMembers.roles.set([M1designmanagement, designmanagement]);
								break;
							case 'M2designmanagement': GMembers.roles.set([M2designmanagement, designmanagement]);
								break;
							case 'B1marketing': GMembers.roles.set([B1marketing, marketing]);
								break;
							case 'B2marketing': GMembers.roles.set([B2marketing, marketing]);
								break;
							case 'B3marketing': GMembers.roles.set([B3marketing, marketing]);
								break;
							case 'M1marketing': GMembers.roles.set([M1marketing, marketing]);
								break;
							case 'M2marketing': GMembers.roles.set([M2marketing, marketing]);
								break;
						}

						// Suppression du message embed : (On cherche le message qui possède l'id du message embed et on le supprime).
						message.channel.messages.fetch(embedId[i])
						.then(message => message.delete());
						// On vide la case du tableau qui contient l'id de l'user.
						arr[i] = " ";
						concat[i] = " ";
					}
				});

			}
			else {
				await message.reply("Ton message ne m'a pas l'air valide :( Vérifies bien la syntaxe !");
			}
		}
	}
});

bot.login('ODk1MjA1NjU3MzI0NzAzNzY1.YV1LPA.AESr1Md3jGZbit5w_Pjfm0-YHYg');
