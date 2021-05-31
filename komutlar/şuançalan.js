module.exports = {
        name: "şuan-çalan",//Buraya Kod İsmi Yazılır
        code: `$author[$songInfo[title];$authorAvatar]
        description[ \`$songInfo[description]\`
        ═══════════════════════════════════
        Süre: $replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Seconds;Saniye;-1]
        Kalan Süre: $replaceText[$replaceText[$songInfo[duration_left];Seconds;Saniye;-1];Seconds;Saniye;-1]
        Şarkı Yayıncısı: __[$songInfo[publisher]]($songInfo[publisher_url])
        Şarkı Linki: **[Tıkla]($songInfo[url])**
        ]
        `//Buraya Kodunuzu Yazınız
}