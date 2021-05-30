module.exports = {
  name:"mute",
  code:`
  <@$mentioned[1]> Kişisini Susturuldu.
  
  !unmute <@$mentioned[1]> Yazarak Kaldırabilirsiniz
  $giveRoles[$mentioned[1];$getServerVar[mrol]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=true;Kişi Zaten Muteli !]
  $onlyIf[$hasRole[$authorID;$getServerVar[myetkili]]!=false; Üzgünüm Bunu Sadece \`\`\`$roleName[$getServerVar[myetkili]]\`\`\` Rolün Olması Lazım !]
  $onlyBotPerms[manageroles;Rolleri Yönet Yetkim Yok Rolü Veremedim !]
  $onlyIf[$mentioned[1]!=;Kimi Mutelemem Gerektiğini Etiketle !]
  $onlyIf[$checkContains[$getServerVar[mrol];$getServerVar[myetkili];yok]!=true;Yetkili Rol Yada Mute Rol Ayarlanmamış]`
}