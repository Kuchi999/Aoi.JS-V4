module.exports = {
  name: "çekiliş",
  code:`
  $setServerVar[ç;false]
$setServerVar[çsayı;0]
$setServerVar[çekiliş;boş]
$wait[1s]
$if[$getServerVar[çekiliş]==boş]
Kimse Çekilişe Katılmadığı İçin Çekiliş İptal
$description[$getServerVar[çsayı] Kişi Katıldı ↗]
$else
Çekilişi Kazanan <@$randomText[;$joinSplitText[;]]>
$textSplit[$getServerVar[çekiliş];,] Tebrikler 🎉
https://discord.com/channels/$guildID/$channelID/$get[m]
$description[$getServerVar[çsayı] Kişi Katıldı ↗]
$endif
 $clearReactions[$channelID;$get[m];🎉]
$wait[$message[1]]
$reactionCollector[$get[m];everyone;$message[1];🎉;çekiliş;no]
  $let[m;$channelSendMessage[$channelID;{title:$messageSlice[1]}{description:
  🎉 Tepkisine Basarak Katılabilirsiniz.
  Süre: $replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; Saniye;-1];m; Dakika;-1];h; Saat;-1];w; Hafta]
  Başlangıç Saati: $sum[$hour;3]:$minute:$second
  Başlatan: <@$authorID>
  }
  {footer:Rick Code};yes]
  $onlyIf[$message[1]!=;Bir Süre Giriniz.
örneğin:
1 saniye = 1s
1 dakika = 1m
1 saat = 1h
1 hafta = 1w
]
$setServerVar[ç;true]
  $onlyIf[$messageSlice[1]!=;Bir Çekiliş Giriniz.
örneğin:
YT Pre Kod
]
$onlyIf[$getServerVar[ç]!=true;Bir Çekiliş Devam Ederken Başka Çekiliş Başlatamazsın.]
`
}