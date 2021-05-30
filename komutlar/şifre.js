module.exports = ({
 name: "şifre",
 code: ` if[$isUserDMEnabled[$authorID]==true]
> __**Şifre**__
> İşte bu gerçekten zor bir şifre

>Şifre : ||$jsonRequest[https://api.toxy.ga/api/password;password]||
$dm[$authorID]
$channelSendMessage[$channelID;Özel mesajlarına gönderdim]
$addCmdReactions[👍]
$else
$reply[$messageID;> Lütfen dmlerini aç. Sana mesaj gönderemiyorum;yes]
$addCmdReactions[👎]
$endIf
`
})