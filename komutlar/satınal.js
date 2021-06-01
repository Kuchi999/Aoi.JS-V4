module.exports = {
        name: "satın-al",//Buraya Kod İsmi Yazılır
        code: `$if[$message[1]==hamburger]
        > $message[2] adet hamburger aldın. Hesabından $multi[$message[2];10] $ eksildi.
        $setUserVar[hamburger;$sum[$setUserVar[hamburger;$authorID];$message[2]];$authorID]
        $setUserVar[para;$sum[$setUserVar[para;$authorID];$message[2]];$authorID]
        $argsCheck[>2;Kaç adet hamburger alacaksan onu yaz.]
        $onlyIf[$multi[$message[2];10]<=$getlUserVar[para;$authorID];Paran Yetmiyor !]
        $endif
        $if[$message[1]==araba]
        > $message[2] adet araba aldın. Hesabından $multi[$message[2];100] $ eksildi.
        $setUserVar[araba;$sum[$setUserVar[araba;$authorID];$message[2]];$authorID]
        $setUserVar[para;$sum[$setUserVar[para;$authorID];$message[2]];$authorID]
        $argsCheck[>2;Kaç adet araba alacaksan onu yaz.]
        $onlyIf[$multi[$message[2];10]<=$getlUserVar[para;$authorID];Paran Yetmiyor !]
        $endif
        $if[$message[1]==ev]
        > $message[2] adet hamburger aldın. Hesabından $multi[$message[2];1000] $ eksildi.
        $setUserVar[ev;$sum[$setUserVar[ev;$authorID];$message[2]];$authorID]
        $setUserVar[para;$sum[$setUserVar[para;$authorID];$message[2]];$authorID]
        $argsCheck[>2;Kaç adet ev alacaksan onu yaz.]
        $onlyIf[$multi[$message[2];10]<=$getlUserVar[para;$authorID];Paran Yetmiyor !]
        $endif
                        $onlyIf[$checkContains[$toLowercase[$message[1]];hamburger;araba;ev]==true;**Doğru Kullanım**
        > !satın-al hamburger $random[1;5]
        > !satın-al araba $random[1;6]
        > !satın-al ev $random[1;7]
        ]
        
        
        
        
        `//Buraya Kodunuzu Yazınız
}