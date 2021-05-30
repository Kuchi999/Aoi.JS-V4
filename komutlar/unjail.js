module.exports = ({
name : "unjail",
code:`**Kişi jailden kaldırıldı**
> $username[$mentioned[1]] isimli kişi cezadan çıkarıldı ve jail rolü kaldırıldı
> Unjail Kullanan Yetkili: $username
$takeRole[$mentioned[1];$getServerVar[jrol]]
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jailrol]]==false;Kullanıcı zaten jailde değil]`
})