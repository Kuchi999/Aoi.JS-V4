module.exports = {
  name:"muteyetkili",
  code:`
  Sunucuda Artık !mute @kişi Yazıldığında \`\`\`$roleName[$mentionedRoles[1]]\`\`\`  Kişisini Harici Kullanmayacak
  $setServerVar[myetkili;$mentionedRoles[1]]
  $onlyPerms[admin;Bu Sunucuda Maalesef Yönetici Yetkin Yok !]
  $onlyBotPerms[admin;Sunucuda Yönetici Yetkim Yok !]
  $onlyIf[$mentionedRoles[1]!=;Mute Yetkili İçin Rol Etiketlemen Gerekmez mi 🙃]`
}
