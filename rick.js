const morty = require("aoi.js")
var fs = require('fs')
const bot = new morty.Bot({
    token:process.env.token,
    prefix:"?"
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


bot.awaitedCommand({
  name:"sag",
  code:`$editMessage[$getServerVar[help;$authorID];{author:$client[name] Yardım Menüsü}
 {description:
 ?ping
 ?test1
 ?test2
 ?test3
 ?test4
 
 Sayfa: 3/3
 
 }{footer:Rick Code}]
  `
})
bot.awaitedCommand({
  name:"orta",
  code:`$editMessage[$getServerVar[help;$authorID];{author:$client[name] Yardım Menüsü}
 {description:
 ?ping
 ?test1
 ?test2
 ?test3
 ?test4
 
 Sayfa: 2/3
 
 }{footer:Rick Code}]
  `
})
bot.awaitedCommand({
  name:"sol",
  code:`$editMessage[$getServerVar[help;$authorID];{author:$client[name] Yardım Menüsü}
 {description:
 ?ping
 ?test1
 ?test2
 ?test3
 ?test4
 
 Sayfa: 1/3
 
 }{footer:Rick Code}]
  `
})
bot.command({
  name:"ping",
  code:`
  Gecikmem : $ping | Bot gecikmesi : $botPing
  `
})

bot.status({
    text: `Rick Code`,
    type: "PLAYING",
    status: "dnd",
    time: 12
})

bot.variables({
rick:"morty",
  çekiliş:"$clientID",
 çsayı:"0",
  ç:"false",
  help:"",
  })