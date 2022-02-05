const morty = require("aoi.js")
var fs = require('fs')
const bot = new morty.Bot({
    token:"Token",
    prefix:"Prefix"
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
  name:"ping",
  code:`
  \`\`\`
  Gecikmem : $ping | Bot Gecikmesi : $botPing
  \`\`\`
  `
})


bot.status({
    text: ``,
    type: "LISTENING",
    status: "idle",
    time: 12
})
