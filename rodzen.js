const rodzen = require("aoi.js")
var fs = require('fs')
const bot = new rodzen.Bot({
    token:process.env.token,
    prefix:"!"
})
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
  name:"yardım",
  code:`$author[Yardım Menüm;]
  $description[
  !ayarlamalı
  !yetkili
  !kullanıcı
  !ekonomi
  !bot
  ]
  
  
  `
})




bot.variables({
    hgbbkanal: "yok",
    Sayaç: "0"
  })