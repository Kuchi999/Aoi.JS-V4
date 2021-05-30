module.exports = ({
name : "unjail",
code:`$title[Kişi jailden kaldırıldı]
$description[$username[$mentioned[1]] isimli kişi cezadan çıkarıldı ve jail rolü kaldırıldı]
$footer[Unjail Kullanan Yetkili: $username;$authorAvatar]
$color[303136]
$takeRole[$mentioned[1];$getServerVar[jrol]]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]==false;Kullanıcı zaten jailde değil]`
})