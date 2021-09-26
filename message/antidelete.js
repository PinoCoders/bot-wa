let fs = require('fs')
let chalk = require('chalk')
module.exports = async function connect(caliph, m) {
   let revoke = JSON.parse(fs.readFileSync('./database/chat/antidelete.json').toString())
    if (!revoke.includes(m.key.remoteJid)) return
    if (m.key.remoteJid == 'status@broadcast') return 
    await caliph.sendMessage(m.key.remoteJid, `\`\`\`Terdeteksi @${m.participant.split("@")[0]} Telah Menghapus Pesan\`\`\`\n\nTipe Pesan : *${Object.keys(m.message.message)[0].split('Message')[0]}*`, 'conversation', {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
   caliph.forwardMessage(m.key.remoteJid, m.message, false).catch(e => console.log(e, m))
 }
 
 
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update './lib/antidelete.js'"))
  delete require.cache[file]
  require(file)
})
