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
bot.command({
name:"giveaway",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (Bitti) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: By#COLON#** <@$authorid>\n**Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Kullnaıcı çekilişe katıldı.}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]> Sen Kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$getmessagevar[ended]==false;]
$onlyif[$get[winner]!=;Kimse kazanmadı!]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$wait[$get[time]]
$setmessagevar[endstamp;$get[endstamp];$get[e]]
$setmessagevar[hoster;$authorid;$get[e]]
$setmessagevar[prize;$get[prize];$get[e]]
$let[e;$apimessage[$channelid;;{author:🎉 Çekiliş 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: By#COLON#** <@$authorid>\n**Nº Kazanan:** 1\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**Kimse** bu çekilişe katılmadı.}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE};{actionRow:🎊 Katıl 🎊,2,3,join:🔁 Tekrar Çek 🔁,2,1,reroll:🔚 Bitir 🔚,2,4,end};;yes]]
$let[endstamp;$sum[$datestamp;$ms[$get[time]]]]
$let[prize;$messageslice[1]]
$onlyif[$ms[$get[time]]!=undefined;Geçersiz süre sağlandı.]
$let[time;$message[1]]
$onlyif[$message[2]!=;
Bir zaman ve bir ödül girin.]`})
bot.onInteractionCreate()
bot.interactionCommand({
name:"join",
prototype:"button",
code:`$editmessage[$get[msg];{author:🎉 Çekiliş 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: By#COLON#** <@$get[host]>\n**Nº Kazanan:** 1\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Kullanıcı bu çekilişe katıldı.}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$setmessagevar[joinedusers;$getmessagevar[joinedusers;$get[msg]]$authorid@;$get[msg]]
$setmessagevar[joined;$get[participated];$get[msg]]
$onlyif[$get[condition]==false;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];false;Çekilişe katıldı];true;Çekilişe zaten katıldınız];ended;Çekiliş sona erdi];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;ended];false;$get[condition]]]
$let[condition;$checkcontains[$getmessagevar[joinedusers;$interactiondata[message.id]];$authorid]]
$let[participated;$sum[$getmessagevar[joined;$get[msg]];1];$get[msg]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
bot.interactionCommand({
name:"reroll",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 Çekiliş (YENİDEN ÇEKİLDİ) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: By#COLON#** <@$authorid>\n**Tekrar Çekildi Yeni Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** 
Kullanıcı bu çekilişe katıldı}{footer:Bitiş Tarihi:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[**Tebrikler** <@$get[winner]>! Tekrar çekildi ve sen kazandın!\n **Ödülün:** \`$get[prize]\`;no]
$onlyif[$get[winner]!=;Katılım eksikliği nedeniyle kazanan belirlenmedi]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Çekilişi yeniden düzenlendi];true;Bu çekiliş henüz bitmedi];false;Yeterli izniniz yok];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];true;$replacetext[$replacetext[$get[condition];true;perform];false;false]];false;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
bot.interactionCommand({
name:"end",
prototype:"button",
code:`$editmessage[$get[e];{author:🎉 GIVEAWAY (FORCE ENDED) 🎉:}{thumbnail:$servericon}{title:$get[prize]}{description:**Çekilişi Başlatan: By#COLON#** <@$authorid>\n**Çekiliş Bitti Kazanan:** <@$get[winner]>\n**Bitiş Tarihi** <t:$truncate[$divide[$get[endstamp];1000]]:R>\n\n**$get[participated]** Users had joined this giveaway}{footer:Ended at:}{timestamp:$get[endstamp]}{color:BLUE}]
$sendmessage[Congratulations <@$get[winner]>! You won the giveaway(force ended) of **$get[prize]**;no]
$onlyif[$get[winner]!=;No winner decided due to lack of participation]
$setmessagevar[ended;true;$get[e]]
$let[winner;$randomtext[$joinsplittext[;]]]
$removetextsplitelement[$gettextsplitlength]
$textsplit[$getmessagevar[joinedusers;$get[e]];@]
$let[participated;$getmessagevar[joined;$get[e]]]
$let[e;$get[msg]]
$onlyif[$get[condition]==perform;]
$interactionreply[$replacetext[$replacetext[$replacetext[$get[condition];perform;Ended the giveaway];true;This giveaway has already ended];false;You do not have enough perms];;;64]
$let[condition;$replacetext[$replacetext[$getmessagevar[ended;$get[msg]];false;$replacetext[$replacetext[$get[condition];true;perform];false;false]];true;$get[condition]]]
$let[condition;$hasperms[$authorid;manageserver]]
$let[host;$getmessagevar[hoster;$get[msg]]]
$let[endstamp;$getmessagevar[endstamp;$get[msg]]]
$let[prize;$getmessagevar[prize;$get[msg]]]
$let[msg;$interactiondata[message.id]]`})
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
  })