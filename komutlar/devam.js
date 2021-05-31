module.exports = {
        name: "devam",//Buraya Kod İsmi Yazılır
        code: `$description[\`$usertag\` Şarkı devam ediyor.]
$color[RANDOM]
        $resumeSong
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
        `//Buraya Kodunuzu Yazınız
}