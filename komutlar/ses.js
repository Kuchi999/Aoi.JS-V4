module.exports = {
        name: "ses",//Buraya Kod İsmi Yazılır
        code: `$description[\`$usertag\` Ses seviyesi %$message[1] olarak ayarlandı.]
        $color[RANDOM]
        $volume[$message[1]]
$onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
$onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
$suppressErrors[Şarkı çalmazken kullanamazsın]
$onlyIf[$message<=100;Maximum 100 olarak ayarlanabilir]
$onlyIf[$isNumber[$message[1]]!=false;$message[1] bir sayı değil o yüzden ses seviyesini ayarlıyamıyorum.]
$argsCheck[1;Lütfen 1 ile 100 arasında ses seviyesi gir!]
        `//Buraya Kodunuzu Yazınız
}