module.exports = {
        name: "tekrarla",
        code: `$description[\`$usertag\` Şarkı tekrarlandı.]
$color[RANDOM]
$let[tekrarla;$loopQueue]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
        `
}