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
        .setFooter ({ text: "Italian Full RP",iconURL:"https://cdn.discordapp.com/attachments/956549530541764628/979750660381765632/AB5F2015-0F31-4FA8-A86D-A5E0E2E19ED2.jpg"});

    client.channels.cache.get("966828152699637790").send({embeds: [embed]}); 
})