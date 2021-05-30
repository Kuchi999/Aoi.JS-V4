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
$attachment[https://api.xzusfin.repl.co/card?avatar=$replaceText[$authorAvatar;.webp;.png; ]&middle=welcome&name=$replaceText[$replaceText[$username[$authorID]#$discriminator[$authorID];#;%23; ]; ;%20; ]&bottom=$replaceText[Members Count $membersCount[$guildID]; ;%20;-1]&background=https://cdn.discordapp.com/attachments/797069150215602239/798428052392116224/images_20.jpeg&text=%23ffffff&avatarborder=%23FFFFFF&avatarbg=%23FF28b3]
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


bot.command({
  name:"yardım",
  code:`$author[Yardım Menüm;]
  $description[$thumbnail[$authorAvatar]
  !ayarlamalı
  !yetkili
  !kullanıcı
  !ekonomi
  !bot
  ]
  $color[303136]
  `
})




bot.variables({
    hgbbkanal: "ayarlanmamış",
    sayaç: "0",
    sayaçkanal: "ayarlanmamış",
    otorol:"ayarlanmamış",
  otorolkanal:"ayarlanmamış",
  })