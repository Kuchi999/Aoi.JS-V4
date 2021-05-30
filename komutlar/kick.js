module.exports = {
        name: "kick",//Buraya Kod İsmi Yazılır
        code: `
        $kick[$mentioned[1]]
        > \`$usertag[$mentioned[1]]\` kişisi sunucudan atıldı.
        > Sebebi: \`$replaceText[$noMentionMessage; ;Sebep belirtilmemiş]\`
        > Atan yetkili: \`$usertag\`
        $onlyIf[$message!=;Birini etiketle ve sebebi yaz.]
        $onlyPerms[ban;Bunun için \`Yasakla\` yetkisi lazım.]
        `//Buraya Kodunuzu Yazınız
}