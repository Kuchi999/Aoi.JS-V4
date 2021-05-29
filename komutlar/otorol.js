module.exports = {
        name: "otorol",//Buraya Kod İsmi Yazılır
        code: `$if[$message[1]==yardım]
        > __**SAYAÇ YARDIM**__
        > !otorol kanal \`Sayaç kanalı ayarlar.\`
        > !otorol ayarla \`Sayaç sayısını ayarlar.\`
        > !otorol sıfırla \`Sayaçı sıfırlar.\`
        $endif
        $if[$message[1]==ayarla]
        $setServerVar[sayaç;$message[2]]
        > Otorol başarılı bir şekilde 
        > Ayarlayan yetkili: $username
          $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $if[$message[1]==kanal]
        $setServerVar[sayaçkanal;$mentionedChannel[1;yes]]
        > Sayaç kanalı başarılı bir şekilde <#$get$setServerVar[sayaçkanal]> olarak ayarlandı.
        > Ayarlayan yetkili: $username
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $if[$message[1]==sıfırla]
        $resetServerVar[sayaç;$guildID]
        $resetServerVar[sayaçkanal;$guildID]
        > Sayaç ve sayaç kanalı sıfırlandı.
        > Sıfılayan yetkili: $username 
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        `//Buraya Kodunuzu Yazınız
}