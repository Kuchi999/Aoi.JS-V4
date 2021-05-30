module.exports = {
  name:"jailrol",
  code:`
  > Sunucuda Artık !jail @kişi Yazıldığında \`\`\`$roleName[$mentionedRoles[1]]\`\`\` Verilecektir.
  $setServerVar[jrol;$mentionedRoles[1]]
  $onlyPerms[admin;Bu Sunucuda Maalesef Yönetici Yetkin Yok !]
  $onlyBotPerms[admin;Sunucuda Yönetici Yetkim Yok !]
  $onlyIf[$mentionedRoles[1]!=;Mute Rol İçin Rol Etiketlemen Gerekmez mi 🙃]`
}