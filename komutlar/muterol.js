module.exports = {
  name:"muterol",
  code:`
  Sunucuda Artık !mute @kişi Yazıldığında \`\`\`$roleName[$mentionedRoles[1]]\`\`\` Verilecektir.
  $setServerVar[mrol;$mentionedRoles[1]]
  $onlyPerms[admin;Bu Sunucuda Maalesef Yönetici Yetkin Yok !]
  $onlyBotPerms[admin;Sunucuda Yönetici Yetkim Yok !]
  $onlyIf[$mentionedRoles[1]!=;Mute Rol İçin Rol Etiketlemen Gerekmez mi 🙃]`
}