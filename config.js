global.owner = ['6283169543914']
global.autoread = true
global.selfmode = false
global.mess = {
group : {
welcome : `Welcome @user\n\nSelamat datang di grup @subject`,
bye : `Selamat Tinggal @user Di Grup @subject`,
promote: '@user Sekarang admin!',
demote: '@user Sekarang bukan admin!'
},
error : 'Terjadi Kesalahan',
success: 'Sukses...'
}
global.server = true
global.prefix = '#'
global.author = 'IG: @xnoob_ganz'
global.packname = 'NAHOYA BOT'


// LIST APIKEY

global.APIs = { // API Prefix

  clph: 'https://recoders-area.caliph.repl.co',
  rikka: 'https://rikka-api.xyz',
  nrtm: 'https://nurutomo.herokuapp.com',
  recodeteam: 'https://api-recodeteam.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  vh: 'http://api.vhtear.com',
  zeks: 'https://api.zeks.me',
  caliphAPI: 'https://api.caliph71.xyz'
}

global.APIKeys = { // APIKey Here
  'http://api.vhtear.com': 'apivinz',
  'https://api.lolhuman.xyz': '9dff22db324aa3e93a246025',
  'https://api.xteam.xyz': 'fdee5076652c3407',
  'https://leyscoders-api.herokuapp.com': 'MIMINGANZ',
  'https://api-recodeteam.herokuapp.com': 'RecodeTeam',
  'https://api.zeks.me': 'rikkabotwa',
  'https://rikka-api.xyz': 'beta',
  'https://api.caliph71.xyz': 'beta'
}

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
