module.exports = ({
 name: "aşölçer",
 code: ` > __**title[ASK KONTROLU 💕**__
> $username ile <@$mentioned[1]> in ask yüzdesi $random[0;100]%
$image[https://api.cool-img-api.ml/ship?user=$replaceText[$replaceText[$replaceText[$userAvatar[$authorID]&user2=$userAvatar[$mentioned[1;yes]];webp;png;-1];jpg;png;-1];gif;png;-1]]
$color[303136]
$onlyIf[$mentioned[1]!=$authorid; Kendine aşık olamazsın.]
$onlyIf[$mentioned[1]!=; Aşk Ölçmek için birini etiketlemen gerekiyor]
`
})