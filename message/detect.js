let fs = require('fs')
let chalk = require('chalk')

module.exports = async function wel(caliph, json) {
let welcome = JSON.parse(fs.readFileSync('./database/chat/welcome.json').toString())
let left = JSON.parse(fs.readFileSync('./database/chat/left.json').toString())
let detect = JSON.parse(fs.readFileSync('./database/chat/detect.json').toString())
meta = await caliph.groupMetadata(json.jid)
function toformat(text, participant) {
return text.replace(/@user/, `@${participant.split('@')[0]}`).replace(/@subject/, meta.subject)
}
switch(json.action) {
case 'promote': 
if (!detect.includes(json.jid)) return
for (let i of json.participants) {
caliph.reply(json.jid, toformat(mess.group.promote, i))
}
break
case 'demote': 
if (!detect.includes(json.jid)) return
for (let i of json.participants) {
caliph.reply(json.jid, toformat(mess.group.demote, i))
}
break
case 'add': 
if (!welcome.includes(json.jid)) return
if (json.participants.includes(caliph.user.jid)) return caliph.reply(json.jid, `Hai,, Saya adalah *${caliph.user.name}*\n\nKetik ${prefix}menu untuk menampilkan menu`)
for (let i of json.participants) {
caliph.reply(json.jid, toformat(mess.group.welcome, i))
}
break
case 'remove': 
if (!left.includes(json.jid)) return
for (let i of json.participants) {
caliph.reply(json.jid, toformat(mess.group.bye, i))
}
break
}
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update './lib/detect.js'"))
  delete require.cache[file]
  require(file)
})