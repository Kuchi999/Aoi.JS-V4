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
bot.botJoinCommand({//command
channel: "$randomChannelID",//the channel where <code> will be sent to
code: `> Prefixim : !
> Sahibim : $usertag[$botOwnerID]
> Davet linkim: $getBotInvite


`//message sent to <channel>
})
bot.command({
  name:"Yardım",
  code:`
  __**Ekonomi Komutları**__
 > !çalış - !çalış
 > !cüzdan - !cüzdan | !cüzdan <@$authorID>
 > !balık tut/kovası/sat - !balık tut | !balık sat | !balık kovası
 > !kumar - !kumar $random[3;150]
 > !rulet - !rulet $random[3;151] 
 > !satın-al hamburger/araba/ev - !satın-al araba | !satın-al ev | !satın-al hamburger
  `
})
bot.command({
  name:"ping",
  code:`
  Gecikmem : $ping | Bot gecikmesi : $botPing
  `
})
bot.command({
  name:"eval",
  code:`$eval[$message]
  $onlyForIDs[$botOwnerID;Bu komut sadece sahibime aittir.]
  `
})

bot.status({
    text: `Zuzia RodzeN⁰⁰²`,
    type: "PLAYING",
    status: "dnd",
    time: 12
})

bot.variables({
  para:"0",
  balık:"0",
  hamburger:"0",
  araba:"0",
  ev:"0",
  })