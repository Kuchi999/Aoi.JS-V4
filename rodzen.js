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
bot.command({
  name:"çal",
  code:`$author[Müzik Çalmaya Başladı;$authorAvatar]
  $description[Aradığı Müzik: \`$message\`
  Bulduğum Müzik: $songInfo[title]
  
  
  
  ]
  
  
  
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
  para:"0",
  balık:"0"
  })