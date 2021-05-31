module.exports = {
        name: "geç",//Buraya Kod İsmi Yazılır
        code: `$description[\`$usertag\` Şarkı atlatıldı.]
$color[RANDOM]
$let[geç;$skipSong]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
        `//Buraya Kodunuzu Yazınız
}