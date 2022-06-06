const Discord = require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] })

client.login(process.env.token)


//BENVENUTO
client.on("guildMemberAdd", member => {
    if (member.user.bot) return
    var embed = new Discord.MessageEmbed()
        .setColor("#09fc00")
        .setTitle("🇮🇹 • 𝐈𝐓𝐀𝐋𝐈𝐀𝐍 𝐅𝐔𝐋𝐋 𝐑𝐏 [𝐗𝐁𝐎𝐗] • 🇮🇹")
        .setDescription(`${member.toString()} Ti diamo il benvenuto su ${member.guild.name}, ti ricordiamo che questa è una community basata sul server <#983394120313737286>`)
        .setThumbnail("https://cdn.discordapp.com/attachments/956549530541764628/979750660381765632/AB5F2015-0F31-4FA8-A86D-A5E0E2E19ED2.jpg")
        .setTimestamp()
        .setFooter ({ text: "Community Italy Full RP"});

    client.channels.cache.get("966828152699637790").send({embeds: [embed]}); 
})


//ANNUNCIO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!annuncio")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var embedme = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setTitle("<a:annuncio3:972113993818861618>__ANNUNCIO DALLO STAFF__<a:annuncio3:972113993818861618>")
                .setDescription(`${testo} \n \n **__ANNUNCIO FATTO DALLO STAFFER__** <a:FrecciaDestra:967914947541618739> ${message.author.toString()}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Community Italy Full RP"});
            message.delete()
            message.channel.send({embeds: [embedme]});
    }
})



//SONDAGGIO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!sondaggio")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var sondaggio = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle("<a:Attenzione:969898344530997260>__SONDAGGIO__<a:Attenzione:969898344530997260>")
                .setDescription(`${message.author.toString()} <a:FrecciaDestra:969898345466318878> ${testo}`) //Testo
                .setTimestamp()
                .setFooter ({ text: "Community Italy Full RP"});
            message.delete()
            message.channel.send({embeds: [sondaggio]})
            .then(msg => {
                msg.react("<a:Si:969898348100321390>")
                msg.react("<a:No:969898348368781362>")
            })

    }
})


//SONDAGGIO//
client.on("messageCreate", message => {
    if (message.content.startsWith("!regolamentocifrp")) {
            var args = message.content.split(/\s+/);
            var testo;
            testo = args.slice(1).join(" ");

            var sondaggio = new Discord.MessageEmbed()
                .setColor("#ff0005")
                .setTitle("<:Rules:983422159026257950>__REGOLAMENTO COMMUNITY ITALY FULL RP__<:Rules:983422159026257950>")
                .setDescription(" ⠀⠀ \n - Non insultare nessun membro ne in chat testuali che in chat vocali \n - Portare rispetto ai membri ma SOPRATUTTO ai membri dello <@&966828088191246377> \n - Non inviare link di altri server \n - Non pronunciare l' N word (neanche per scherzo) \n - Non spammare messaggi in chat \n - Non menzionare lo <@&966828088191246377> in chat (se avete bisogno di contattare lo staff esistono i ticket) \n ⠀⠀") //Testo
                .setTimestamp()
                .setFooter ({ text: "Community Italy Full RP"});
            message.delete()
            message.channel.send({embeds: [sondaggio]})

    }
})