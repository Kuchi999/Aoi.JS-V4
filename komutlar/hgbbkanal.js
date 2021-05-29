module.exports = {
        name: "hgbbkanal",//Buraya Kod İsmi Yazılır
        code: `
        $if[$message[1]==ayarla]
        $setServerVar[hgbbkanal;$mentionedChannel[1;yes]]
        > Hoşgeldin Bay bay kanalı ayarlandı.
        > Ayarlayan yetkili: $username
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        $if[$message[1]==sıfırla]
        if[$message[1]==ayarla]
        $setServerVar[hgbbkanal;yok]
        > Hoşgeldin Bay bay kanalı sıfırlandı.
        > Sıfılayan yetkili: $username
        $onlyPerms[admin;Bunun için \`Yönetici\` yetkisi lazım.]
        $endif
        `//Buraya Kodunuzu Yazınız
}