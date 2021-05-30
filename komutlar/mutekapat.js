module.exports = {
  name:"mutekapat",
  code:`
  Mute Rol ve Yetkili Rolü Kapatıldı
  $setServerVar[mrol;yok]
  $setServerVar[myetkili;yok]
  $onlyPerms[admin;Sunucuda Yönetici Yetkiniz Yok ! ]
  $onlyBotPerms[admin;Sunucuda Yönetici Yetkim Yok]`
}