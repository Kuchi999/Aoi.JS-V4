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
code: `> <@$authorID> $serverName sunucusuna Hoş geldin.
$attachment[https://cdn.discordapp.com/attachments/841059008927498277/848297449239347200/indir.jpg]
$channelSendMessage[$getServerVar[sayaçkanal];> \`$usertag\` seninle birlikte $membersCount kişiyiz. $getServerVar[sayaç] kişi olmamıza $sub[$getServerVar[sayaç];$membersCount] kişi kaldı.]
$channelSendMessage[$getServerVar[otorolkanal];> \`$usertag\` aramıza \`$roleName\`]


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