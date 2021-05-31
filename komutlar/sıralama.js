module.exports = {
        name: "sıralama",//Buraya Kod İsmi Yazılır
        code: `
      $author[Şarkı Sıralaması]
  $description[\`$queue[1;15;{number} - {title}]\`
  ════════════════════════════════════
  Şuanda Çalan Müzik: [$songInfo[title]]($songInfo[url])
  Müziği Açan: $usertag[$songInfo[userID]]]
  $color[RANDOM]
  $onlyIf[$voiceID[$clientID]!=;Şarkı çalmazken kullanamazsın]
 $onlyIf[$voiceID!=;Bir ses kanalına girmezsen kullanamazsın]
 $onlyIf[$queue[1;15;{number} - {title}]!=;Sırada bir şarkı bulunmuyor]
 $suppressErrors[Şarkı çalmazken kullanamazsın]
        `//Buraya Kodunuzu Yazınız
}