module.exports = {
        name: "unban",//Buraya Kod İsmi Yazılır
        code: `
        $unban[$message[1]]
        > \`$usertag[$message[1]\` kişisi sunucudan banlandı.
        > Sebebi: \`$replaceText[$noMentionMessage; ;Sebep belirtilmemiş]\`
        $onlyIf[$message!=;Birini etiketle ve sebebi yaz.]
        $onlyPerms[ban;Bunun için \`Yasakla\` yetkisi lazım.]
        `//Buraya Kodunuzu Yazınız
}