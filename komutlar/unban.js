module.exports = {
        name: "unban",//Buraya Kod İsmi Yazılır
        code: `
        $unban[$message[1]]
        > \`$usertag[$message[1]]\` kişisinin sunucudan banı kaldırıldı.
        $onlyIf[$isNumber[$message[1]]==true;Lütfen sadece kullanıcı ID'si girin]
        $onlyPerms[ban;Bunun için \`Yasakla\` yetkisi lazım.]
        `//Buraya Kodunuzu Yazınız
}