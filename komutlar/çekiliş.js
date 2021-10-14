module.exports = {
  name: "çekiliş",
  code:`$reactionCollector[$sget[m];$authorID;1m;🎉;çekiliş;yes]
  $let[m;$channelSendMessage[$channelID;{description:
  }
  {footer:Evet İçin ✔️ Emojisine Hayır İçin ❌ Emojisine Tıklayınız.};yes]
  
  $onlyIf[$message!=;Bir Çekiliş Giriniz.]`
}