module.exports = {
        name: "kumar",//Buraya Kod İsmi Yazılır
        code: `
        
        > \`$message[1] $\` Sayıda para yatırdın ve $replaceText[$replaceText[$randomText[1;2];1;kaybettin.;-1];2;2 katı kazandın.;-1]
        $replaceText[$replaceText[$randomText[1;2];1;$setUserVar[para;sub[$getUserVar[para];$message[1]];$authorID];-1];2;$setUserVar[para;$multi[$message[1];2];$authorID];-1]
        $onlyIf[$message[1]<=$getlUserVar[para;$authorID];Paran Yetmiyor !]
  $onlyIf[$isNumber[$message[1]]!=false; Girdiğin Değer Yanlış !]
  $onlyIf[$message[1]>3;3 ten yüksek girmen lazım.]
  $onlyIf[$message[1]>2;3 ten yüksek girmen lazım.]
  $onlyIf[$message[1]>1;3 ten yüksek girmen lazım.]
        $cooldown[10s;10 saniye beklemen lazım dostum.]
        
        
        
        `//Buraya Kodunuzu Yazınız
}