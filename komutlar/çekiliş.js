module.exports = {
  name: "çekiliş",
  code:`
$if[$getServerVar[çekiliş]==boş]
Kimse Çekilişe Katılmadığı İçin Çekiliş İptal
$description[$getServerVar[çsayı] Kişi Katıldı ↗]
$else
Çekilişi Kazanan <@$randomText[$getServerVar[çekiliş]]> Tebrikler 🎉
https://discord.com/channels/$guildID/$channelID/$get[m]

$description[$getServerVar[çsayı] Kişi Katıldı ↗]
 $clearReactions[$channelID;$message[1];🎉]
$wait[$message[1]]
$reactionCollector[$get[m];everyone;$message[1];🎉;çekiliş;yes]
  $let[m;$channelSendMessage[$channelID;{description:
  🎉 Tepkisine Basarak Katılabilirsiniz.
  Süre: $replaceText[$replaceText[$replaceText[$replaceText[$message[1];s; Saniye;-1];m; Dakika;-1];h; Saat;-1];w; Hafta]
  Başlangıç Saati: $sum[$hour;3]:$minute:$second
  Başlatan: <@$authorID>
  }
  {footer:Rick Code};yes]
  $onlyIf[$message[1]!=;Bir Süre Giriniz.]
  $onlyIf[$messageSlice[1]!=;Bir Çekiliş Giriniz.]`
}