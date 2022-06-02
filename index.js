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


//MENU//
client.on("messageCreate", message => {
    if(message.content == "!help"){
        let embed = new Discord.MessageEmbed()
        .setTitle("Menù Help")
        .setPlaceholder("Seleziona una pagni")
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
            {
                label: "Pagina 1",
                description: "Vai alla pagina numero 1",
                value: "pagina1"
            },
            {
                label: "Pagina 2",
                description: "Vai alla pagina numero 2",
                value: "pagina2"
            },
            {
                label: "Pagina 3",
                description: "Vai alla pagina numero 3",
                value: "pagina3"
            }
        ])
        let row = new Discord.MessageActionRow()
        .addComponents(select)

        message.channel.send({ embeds: [embed], components: [row] })
    }
})