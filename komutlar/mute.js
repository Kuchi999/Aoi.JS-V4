module.exports = {
  name:"mute",
  code:`
  $username[$mentioned[1]]#$discriminator[$mentioned[1]] Kişisinin Mutesi bitti
 $takeRoles[$mentioned[1];$getServerVar[mrol]]
 $wait[$noMentionMessage
 $giveRoles[$mentioned[1];$getServerVar[mrol]]
 $channelSendMessage[$channelID;$usertag Kişisine $noMentionMessage[1] Süresi Boyunca Mutelendi.]
 $onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=true;Kişi Zaten Muteli !]
 $onlyIf[$noMentionMessage!=;Süre Belirt
1s, 1m , 1h Vesaire]
  $onlyBotPerms[manageroles;Rolleri Yönet Yetkim Yok Rolü Veremedim !]
  $onlyIf[$mentioned[1]!=;Kimi Jaile Gerektiğini Etiketle !]
  $onlyIf[$checkContains[$getServerVar[mrol];yok]!=true;Mute Rol Ayarlanmamış.]
  `}
 