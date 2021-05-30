module.exports = ({
name : "jail",
code:`$if[$userRoles[$mentioned[1]]!=]
$title[Kişi jaile atıldı]
$description[$username[$mentioned[1]] isimli kişi ceza yedi ve hapse atıldı. Kullanıcı artık jailde]
$footer[Jail Kullanan Yetkili: $username;$authorAvatar]
$color[303136]
$takeRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$userRoles[$mentioned[1];ids];, ]
$else
$title[Kişi jaile atıldı]
$description[$username[$mentioned[1]] isimli kişi ceza yedi ve hapse atıldı. Kullanıcı artık jailde]
$footer[Jail Kullanan Yetkili: $username;$authorAvatar]
$color[303136]
$endif
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jrol]]!=true;Kullanıcı zatten jailde]`
})