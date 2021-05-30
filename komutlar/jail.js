module.exports = ({
name : "jail",
code:`$if[$userRoles[$mentioned[1]]!=]
**Kişi jaile atıldı**
> $username[$mentioned[1]] isimli kişi ceza yedi ve hapse atıldı. Kullanıcı artık jailde
> Jail Kullanan Yetkili: $username
$takeRoles[$mentioned[1];$joinSplitText[;]]
$textSplit[$userRoles[$mentioned[1];ids];, ]
$else
**Kişi jaile atıldı**
> $username[$mentioned[1]] isimli kişi ceza yedi ve hapse atıldı. Kullanıcı artık jailde
> Jail Kullanan Yetkili: $username
$endif
$onlyIf[$hasRole[$mentioned[1];$getServerVar[jrol]]!=true;Kullanıcı zatten jailde]`
})