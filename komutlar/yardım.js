module.exports = {
  name:"yardım",
 code:
  `
  
 $setServerVar[help;$get[help];$authorID]
  $reactionCollector[$get[help];$authorID;1m;◀️,⏹️,▶️;sol,orta,sag;yes]
 $let[help;$channelSendMessage[$channelID;{author:$client[name] Yardım Menüsü}
 {description:
 ?ping
 ?test1
 ?test2
 ?test3
 ?test4
 
 Sayfa: 1/3
 
 }{footer:Rick Code};yes]]
 `
}