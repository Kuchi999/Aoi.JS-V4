module.exports = {
        name: "hgbbkanal",//Buraya Kod İsmi Yazılır
        code: `
        $if[$message[1]==ayarla]
        $setServerVar[hgbbkanal;$mentionedChannels[1]]
        > Hoşgeldin Bay bay kanalı ayarlandı.
        > Ayarlayan yetkili: $username
        $onlyIf[$mentionedChannels[1]!=;Bir Kanal Etiketle. Örnek: \`!hgbbkanal ayarla #kanal\`]
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $if[$message[1]==sıfırla]
        if[$message[1]==ayarla]
        $resetServerVar[hgbbkanal;$guildID]
        > Hoşgeldin Bay bay kanalı sıfırlandı.
        > Sıfılayan yetkili: $username
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla]==true;**Doğru kullanım:**
        > !hgbbkanal ayarla #kanal
        > !hgbbkanal sıfırla
        
        ]
        `//Buraya Kodunuzu Yazınız
}