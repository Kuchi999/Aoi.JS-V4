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
bot.command({
  name: "emoji-rol-menü-kur",
  code: `
$title[Emoji Rol Menü Kuruldu]
$description[
**Menü Adı:** \`$splitText[1]\`
**Mesaj ID:** \`$splitText[2]\`]
$addTimestamp
$author[$username;$authorAvatar]
$setServerVar[emojimenüler;$getServerVar[emojimenüler]$getObjectProperty[menü]|$getObjectProperty[msg]|]
$addObjectProperty[msg;"$splitText[2]"]
$addObjectProperty[menü;$splitText[1]]
$onlyIf[$messageExists[$mentionedChannels[1];$splitText[2]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-ekle menüAdı|mesajID|<#kanal etiket>\`]
$onlyIf[$isNumber[$splitText[2]]!=false;Emoji rol menü olarak ayarlamak istediğin mesajın ID'sini gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin mesajın ID'sini gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$mentionedChannels[1]!=;Emoji rol menü olarak ayarlamak istediğin mesajın bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
`
})

bot.command({
  name: "emoji-rol-ekle",
  code: `
$title[Emoji Rol Eklendi]
$description[
**Menü:**\`$splitText[1]\`
**Menünün mesaj ID'si:**\`$getObjectProperty[msgid]\`
**Emoji:** $splitText[3]
**Rol:** $splitText[4]]
$addTimestamp
$author[$username;$authorAvatar]
$addMessageReactions[$mentionedChannels[1];$getObjectProperty[msgid];$splitText[3]]
$setMessageVar[emojiroller;$getMessageVar[emojiroller;$getObjectProperty[msgid]]$splitText[3]|$splitText[4]|;$getObjectProperty[msgid]]
$textSplit[$getObjectProperty[böl];|]
$suppressErrors[Bilinmeyen bir hata oluştu!]
$onlyIf[$findTextSplitIndex[$getObjectProperty[menüs]]!=0;\`$splitText[1]\` adlı emoji rol menü bulunamadı.Kurmak için -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$messageExists[$mentionedChannels[1];$getObjectProperty[msgid]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle mesajID|<#kanal etiket>|<emoji>|<@&rol>\`]
$addObjectProperty[msgid;"$splitText[$sum[$findTextSplitIndex[$getObjectProperty[menüs]];1]]"]
$textSplit[$getServerVar[emojimenüler];|]
$addObjectProperty[menüs;$splitText[1]]
$onlyIf[$mentionType[$splitText[4]]==role;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
$onlyIf[$emojiExists[$advancedTextSplit[$splitText[3];:;3;>]]==false;Emoji Rol Sistemi discord custom emojilerini desteklemez.Klavye emojileri kullanmayı dene]
$onlyIf[$mentionType[$splitText[2]]==channel;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$onlyIf[$mentionedRoles[1]!=;Emoji rol rolünü etiketlemelisin.]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin menünün adını gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
$onlyIf[$serverChannelExists[$mentionedChannels[1]]==true;Etiketlediğin kanal bu sunucuda bulunmuyor.]
$onlyIf[$mentionedChannels[1]!=;Emoji rol menü olarak ayarlamak istediğin mesajın bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-ekle menüAdı|<#kanal etiket>|<emoji>|<@&rol>\`]
`
})

bot.command({
  name: "emoji-rol-düzenle",
  code: `
$title[Emoji Rol Düzenlendi]
$description[
**Menü Adı:** \`$splitText[1]\`
**Eski Emoji:** $splitText[3]
**Eski Rol:** $getObjectProperty[eskirol]
**Yeni Emoji:** $getObjectProperty[newe]
**Yeni Rol:** $getObjectProperty[rol]]
$addTimestamp
$author[$username;$authorAvatar]
$addMessageReactions[$mentionedChannels[1];$getObjectProperty[msgid];$splitText[4]]
$textSplit[$getObjectProperty[böl];|]
$clearReactions[$mentionedChannels[1];$getObjectProperty[msgid];$getObjectProperty[ese]]
$setMessageVar[emojiroller;$joinSplitText[|];$getObjectProperty[msgid]]
$editTextSplitElement[$sum[$findTextSplitIndex[$getObjectProperty[newe]];1];$getObjectProperty[rol]]
$editTextSplitElement[$findTextSplitIndex[$getObjectProperty[ese]];$getObjectProperty[newe]]
$addObjectProperty[eskirol;$splitText[$sum[$findTextSplitIndex[$getObjectProperty[ese]];1]]]
$onlyIf[$checkContains[$joinSplitText[ ];$getObjectProperty[ese]]==true;\`$getObjectProperty[ese]\` emojisi bulunamadı!]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[newe;$splitText[4]]
$addObjectProperty[ese;$splitText[3]]
$addObjectProperty[rol;$splitText[5]]
$textSplit[$getObjectProperty[böl];|]
$onlyIf[$findTextSplitIndex[$replaceText[$getObjectProperty[menüs]; ;]]!=0;\`$splitText[1]\` adlı emoji rol menü bulunamadı.Kurmak için -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$textSplit[$getServerVar[emojimenüler];|]
$onlyIf[$messageExists[$mentionedChannels[1];$getObjectProperty[msgid]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$findTextSplitIndex[$splitText[3]]!=0;\`$splitText[3]\` emojisi \`$splitText[1]\` menüsünde bulunmuyor.]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[msgid;"$splitText[$sum[$findTextSplitIndex[$getObjectProperty[menüs]];1]]"]
$textSplit[$getServerVar[emojimenüler];|]
$addObjectProperty[menüs;$splitText[1]]
$onlyIf[$mentionType[$splitText[5]]==role;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$mentionType[$splitText[2]]==channel;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$emojiExists[$advancedTextSplit[$splitText[2];:;3;>]]==false;Emoji Rol Sistemi discord custom emojilerini desteklemez.Klavye emojileri kullanmayı dene]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$mentionedRoles[1]!=;Emoji rol rolünü etiketlemelisin.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin menünün adını gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
$onlyIf[$mentionedChannels[1]!=;Rollerini emojilerini değiştirmek istediğin menünün bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<eskiEmoji>|<yeniEmoji>|<@&yeniRol>\`]
`
})
bot.reactionAddCommand({
  channel: "$channelID",
  code: `
$giveRoles[$authorID;$advancedTextSplit[$splitText[$sum[$findTextSplitIndex[$emojiToString];1]];&;2;>]]
$suppressErrors
$onlyIf[$checkContains[$toLowercase[$joinSplitText[ ];$emojiToString]]==true;]
$textSplit[$getMessageVar[emojiroller;$messageID];|]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$checkContains[$toLowercase[$getServerVar[emojimenüler];$messageID]]==true;]
`
})


bot.reactionRemoveCommand({
  channel: "$channelID",
  code: `
$takeRoles[$authorID;$advancedTextSplit[$splitText[$sum[$findTextSplitIndex[$emojiToString];1]];&;2;>]]
$suppressErrors
$onlyIf[$checkContains[$toLowercase[$joinSplitText[ ];$emojiToString]]==true;]
$textSplit[$getMessageVar[emojiroller;$messageID];|]
$onlyIf[$isBot[$authorID]==false;]
$onlyIf[$checkContains[$toLowercase[$getServerVar[emojimenüler];$messageID]]==true;]
`
})

bot.command({
  name: "emoji-rol-sil",
  code: `
$title[Emoji Rol Silindi]
$description[
**Menü Adı:** \`$splitText[1]\`
**Silinen Emoji:** $splitText[3]
**Silinen Rol:** $getObjectProeprty[silinedrol]
]
$addTimestamp
$author[$username;$authorAvatar]
$clearReactions[$mentionedChannels[1];$getObjectProperty[msgid];$splitText[3]]
$textSplit[$getObjectProperty[böl];|]
$setMessageVar[emojiroller;$joinSplitText[|];$getObjectProperty[msgid]]
$addObjectProperty[silinedrol;$sum[$findTextSplitIndex[$getObjectProperty[emoji]];1]]
$removeSplitTextElement[$findTextSplitIndex[$getObjectProperty[emoji]];$sum[$findTextSplitIndex[$getObjectProperty[emoji]];1]]
$onlyIf[$checkContains[$joinSplitText[ ];$getObjectProperty[emoji]]==true;\`$getObjectProperty[emoji]\` emojisi bulunamadı!]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[emoji;$splitText[3]]
$textSplit[$getObjectProperty[böl];|]
$onlyIf[$findTextSplitIndex[$replaceText[$getObjectProperty[menüs]; ;]]!=0;\`$splitText[1]\` adlı emoji rol menü bulunamadı.Kurmak için -> \`$getServerVar[prefix]emoji-rol-menü-kur menü Adı|mesajID|<#kanal etiket>\`]
$textSplit[$getServerVar[emojimenüler];|]
$onlyIf[$messageExists[$mentionedChannels[1];$getObjectProperty[msgid]]==true;Etiketlediğin kanalda belirttiğin mesaj bulunamadı.Doğru kullanım -> \`.emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$findTextSplitIndex[$splitText[3]]!=0;\`$splitText[3]\` emojisi \`$splitText[1]\` menüsünde bulunmuyor.]
$textSplit[$getMessageVar[emojiroller;$getObjectProperty[msgid]];|]
$addObjectProperty[msgid;"$splitText[$sum[$findTextSplitIndex[$getObjectProperty[menüs]];1]]"]
$textSplit[$getServerVar[emojimenüler];|]
$addObjectProperty[menüs;$splitText[1]]
$onlyIf[$mentionType[$splitText[2]]==channel;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$emojiExists[$advancedTextSplit[$splitText[2];:;3;>]]==false;Emoji Rol Sistemi discord custom emojilerini desteklemez.Klavye emojileri kullanmayı dene]
$textSplit[$getObjectProperty[böl];|]
$addObjectProperty[böl;$replaceText[$message; ;]]
$createObject[{}]
$onlyIf[$checkContains[$toLowercase[$message;|]]==true;Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$noMentionMessage!=;Emoji rol menü olarak ayarlamak istediğin menünün adını gir.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
$onlyIf[$mentionedChannels[1]!=;Rollerini emojilerini değiştirmek istediğin menünün bulunduğu kanalı etiketle.Doğru kullanım -> \`$getServerVar[prefix]emoji-rol-düzenle menüAdı|<#kanal etiket>|<emoji>\`]
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
   emojimenüler: "",
  emojiroller: "",
  prefix:"?",
  })