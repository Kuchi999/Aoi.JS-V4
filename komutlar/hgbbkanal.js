module.exports = {
        name: "hgbbkanal",//Buraya Kod İsmi Yazılır
        code: `
        $if[$message[1]==ayarla]
        $setServerVar[hgbbkanal;$mentionedChannel[1;yes]]
        
        
        
        
        `//Buraya Kodunuzu Yazınız
}