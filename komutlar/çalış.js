module.exports = {
        name: "çalış",//Buraya Kod İsmi Yazılır
        code: `
        > $randomText[Polis olarak;Doktor olorak;Muhabir olarak;Yazılımcı olarak;Bakkal olarak] çalıştın. $random[50;150] € kazandın.
        $setUserVar[para;$random[50;150]]
        $cooldown[10s;10 saniye beklemen lazım dostum.]
        
        `//Buraya Kodunuzu Yazınız
}