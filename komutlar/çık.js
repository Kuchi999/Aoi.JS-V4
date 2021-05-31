module.exports = {
        name: "çık",//Buraya Kod İsmi Yazılır
        code: `$description[\`$usertag\` Şarkıyı kapattım ve sesten çıktım.]
$color[RANDOM]
$leaveVC
$onlyIf[$voiceID[$clientID]!=;Zaten bir ses kanalında değilim]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Ses kanalından çıkamadım]
        `//Buraya Kodunuzu Yazınız
}