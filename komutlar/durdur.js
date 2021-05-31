module.exports = {
        name: "durdur",//Buraya Kod İsmi Yazılır
        code: `$description[Şarkı durduruldu. Durduran kişi: \`$usertag\`]
$pauseSong
$color[RANDOM]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
        `//Buraya Kodunuzu Yazınız
}