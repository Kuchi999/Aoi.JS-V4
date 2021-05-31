module.exports = {
        name: "şuan-çalan",//Buraya Kod İsmi Yazılır
        code: `$author[$songInfo[title];$authorAvatar]
        description[ \`$songInfo[description]\`
        
        Süre: $replaceText[$replaceText[$songInfo[duration];Seconds;Saniye;-1];Seconds;Saniye;-1]
        
        
        
        ]
        `//Buraya Kodunuzu Yazınız
}