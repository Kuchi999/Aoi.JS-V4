module.exports = {
        name: "balık",//Buraya Kod İsmi Yazılır
        code: `$if[$message[1]==tut]
        > $random[1;3] adet balık tuttun. Kovadaki balık sayısı $sum[$getUserVar[balık;$authorID];$andom[1;3]].
        $setUserVar[balık;$sum[$getUserVar[balık;$authorID];$random];$authorID]
        $cooldown[10s;10 saniye bekle dostum.]
        $endif
        $if[$message[1]==sat]
        > Tüm balıklarını sattın. Toplam Paran $sum[$getUserVar[para;$authorID];$getUservar[balık;$authorID]] $
        $setUserVar[para;$getUserVar[balık;$authorID];$authorID]
        $setUserVar[balık;0;$authorID]
        $endif
        $if[$message[1]==kovası]
        > Kovada toplam $getUserVar[balık;$authorID] balık var. Her balıktan 1 $ alsan güzel para.
        $endif
                $onlyIf[$checkContains[$toLowercase[$message];ayarla;sıfırla]==true;**Doğru kullanım:**
        > !hgbbkanal ayarla #kanal
        > !hgbbkanal sıfırla
        
        ]
        `
}