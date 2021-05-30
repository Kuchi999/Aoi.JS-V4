module.exports = {
        name: "kick",//Buraya Kod İsmi Yazılır
        code: `
        $kick[$mentioned[1]]
        > \`$usertag[$mentioned[1]]\` kişisi sunucudan atıldı.
        > Atan yetkili: \`$usertag\`
        $onlyIf[$message!=;Birini etiketle.]
        $onlyPerms[kick;Bunun için \`Kullanıcıyı At\` yetkisi lazım.]
        `//Buraya Kodunuzu Yazınız
}