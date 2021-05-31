module.exports = {
        name: "balık",//Buraya Kod İsmi Yazılır
        code: `$if[$message[1]==tut]
        > $random[1;3] adet balık tuttun. Kovadaki balık sayısı $sum[$getUserVar[balık;$authorID];$andom[1;3]].
        $setUserVar[balık;$sum[$getUserVar[balık;$authorID];$random];$authorID]
        $cooldown[10s;10 saniye bekle dostum.]
        $endif
        $if[$message[1]==sat]
        > Tüm balıklarını sattın.
        $setUserVar[para;$getUserVar[balık;$authorID];$authorID]
        
        
        
        
        
        
        `
}