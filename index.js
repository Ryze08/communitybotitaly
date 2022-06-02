const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })

client.login(process.env.token)


//MESSAGGIO IN EMBED//
client.on("messageCreate", message => {
    if (message.content.startsWith("!embed")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ed00ff")
                .setDescription(` ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Ryze Community"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})