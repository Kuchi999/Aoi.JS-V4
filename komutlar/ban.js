module.exports = {
        name: "ban",//Buraya Kod İsmi Yazılır
        code: `
        $ban[$mentioned[1];$noMentionMessage]
        > \`$usertag[$mentioned[1]\` kişisi sunucudan banlandı.
        > Sebebi: \`$replaceText[$noMentionMessage; ;Sebep belirtilmemiş]\`
        $onlyIf[$message!=;Birini etiketle ve sebebi yaz.]
        $onlyPerms[ban;Bunun için \`Yasakla\` yetkisi lazım.]
        `//Buraya Kodunuzu Yazınız
}