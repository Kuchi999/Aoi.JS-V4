module.exports = {
        name: "otorol",//Buraya Kod İsmi Yazılır
        code: `$if[$message[1]==yardım]
        > __**OTOROL YARDIM**__
        > !otorol kanal \`Otorol kanalı ayarlar.\`
        > !otorol ayarla \`Otorol sayısını ayarlar.\`
        > !otorol sıfırla \`Otorolü sıfırlar.\`
        $endif
        $if[$message[1]==ayarla]
        $setServerVar[otorol;$rolName[$mentionedRoles[1]]
        > Otorol başarılı bir şekilde __$rolName[$mentionedRoles[1]]
        > Ayarlayan yetkili: $username
          $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $if[$message[1]==kanal]
        $setServerVar[otorolkanal;$mentionedChannels[1;yes]]
        > Otorol kanalı başarılı bir şekilde <#$get$setServerVar[sayaçkanal]> olarak ayarlandı.
        > Ayarlayan yetkili: $username
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $if[$message[1]==sıfırla]
        $resetServerVar[otorol;$guildID]
        $resetServerVar[otorolkanal;$guildID]
        > Otorol ve otorol kanalı sıfırlandı.
        > Sıfılayan yetkili: $username 
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        `//Buraya Kodunuzu Yazınız
}