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
                $onlyIf[$mentionedChannels[1]!=;Bir Kanal Etiketle. Örnek: \`!hgbbkanal ayarla #kanal\`]
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
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
                $onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla;yardım]==true;**Doğru kullanım:**
        > !otorol ayarla @rol
        > !otorol sıfırla
        > !otorol kanal #kanal
        ]
        `//Buraya Kodunuzu Yazınız
}