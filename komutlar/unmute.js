module.exports = {
  name:"unmute",
  code:`
  <@$mentioned[1]> Kişisininin Susturulmasi Kalkti
  $takeRoles[$mentioned[1];$getServerVar[mrol]]
  $onlyIf[$hasRole[$mentioned[1];$getServerVar[mrol]]!=false;Kişi Muteli Değil !]
  $onlyIf[$hasRole[$authorID;$getServerVar[myetkili]]!=false; Üzgünüm Bunu Sadece \`\`\`$roleName[$getServerVar[myetkili]]\`\`\` Rolün Olması Lazım !]
  $onlyBotPerms[manageroles;Rolleri Yönet Yetkim Yok Rolü Veremedim !]
  $onlyIf[$mentioned[1]!=;Kimin Mutesini Kaldirmam Gerektiğini Etiketle !]
  $onlyIf[$checkContains[$getServerVar[mrol];$getServerVar[myetkili];yok]!=true;Yetkili Rol Yada Mute Rol Ayarlanmamış.]`
}