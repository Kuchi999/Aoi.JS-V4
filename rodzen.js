const rodzen = require("aoi.js")
var fs = require('fs')
const bot = new rodzen.Bot({
    token:process.env.token,
    prefix:"!"
})
bot.onJoined()
bot.onLeave()
bot.onMessage()
var reader = fs.readdirSync("./komutlar/").filter(file => file.endsWith(".js"))
for(const file of reader) {    
    const command = require(`./komutlar/${file}`)
    bot.command({
        name: command.name,
        code: command.code
    })
}
bot.joinCommand({ //command
channel: "$getServerVar[hgbbkanal]", //channel where it will log
code: `> **<@$authorID> $serverName sunucusuna Hoş geldin.**
$attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png; ]&middle=hosgeldin&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23; ]; ;%20; ]&bottom=$replaceText[Members Count $membersCount[$guildID]; ;%20;-1]&background=https://cdn.discordapp.com/attachments/837700334011809843/848604293963055124/hd-turk-bayragi-arkaplan-resimleri-23.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
` //Message sent to <channel>
})
bot.joinCommand({ //command
channel: "$getServerVar[sayaçkanal]", //channel where it will log
code: `> :white_check_mark:** \`$usertag\` senle birlikte \`$membersCount\` kişi olduk. \`[$getServerVar[sayaç]\` kişi olmamıza  \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.**
` //Message sent to <channel>
})
bot.joinCommand({ //command
channel: "$getServerVar[otorolkanal]", //channel where it will log
code: `> :white_check_mark: **\`$usertag\` aramıza __\`$rolName[$getServerVar[otorol]]\`__ rolü ile katıldı.
$giveRole[$authorID;$getServerVar[otorol]]
` //Message sent to <channel>
})
bot.leaveCommand({ //command
channel: "$getServerVar[hgbbkanal]", //channel where it will log
code: `> **<@$authorID> $serverName sunucusuna Hoş geldin.**
$attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png; ]&middle=gorusuz&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23; ]; ;%20; ]&bottom=$replaceText[Members Count $membersCount[$guildID]; ;%20;-1]&background=https://cdn.discordapp.com/attachments/837700334011809843/848604293963055124/hd-turk-bayragi-arkaplan-resimleri-23.jpg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
` //Message sent to <channel>
})
bot.leaveCommand({ //command
channel: "$getServerVar[sayaçkanal]", //channel where it will log
code: `> :white_check_mark:** \`$usertag\` seniz\`$membersCount\` kişi kaldık. \`[$getServerVar[sayaç]\` kişi olmamıza  \`$sub[$getServerVar[sayaç];$membersCount]\` kişi kaldı.**
` //Message sent to <channel>
})

bot.command({
  name:"yardım",
  code:`__**Yardım**__
  > !ayarlamalı - \`Ayarlamalı komutları gösterir.\`
  > !yetkili - \`Yetkili komutlarını gösterir.\`
  > !kullanıcı - \`Kullanıcı komutlarını gösterir.\`
  > !ekonomi - \`Ekonomi komutlarını gösterir.\`
  > !bot - \`Bot komutlarını gösterir.\`
  `
})

bot.command({
  name:"yetkili",
  code:`
  __**Yetkili Komutları**__
  > !ban @etiket sebep - !ban <@$authorID> örnek
  > !unban ID - !unban $authorID
  > !kick @etiket - !kick <@$authorID>
  > !mute @etiket süre - !mute <@$authorID> 10m
  > !unmute @etiket - !unmute <@$authorID>
  > !jail @etiket  - !jail <@$authorID>
  > !unjail @etiket - !unjail <@$authorID>
  `
})


bot.variables({
    hgbbkanal: "ayarlanmamış",
    sayaç: "0",
    sayaçkanal: "ayarlanmamış",
    otorol:"ayarlanmamış",
  otorolkanal:"ayarlanmamış",
  mrol:"yok",
  jrol:"yok",
  })