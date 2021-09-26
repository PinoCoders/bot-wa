async function a(conn, json) {
let { from } = json[2][0][1]
    let id = json[2][0][2][0][1]["call-id"]
   await conn.rejectIncomingCall(from, id)
   await conn.sendMessage(from, '「 Reject Call 」\nMaaf Kami Tidak Bisa Menerima Panggilan!\n\nSorry We Can\'t Receive Calls!\n\nTelpon/call = block', 'conversation')
   conn.blockUser(from)
  }
  
module.exports = a

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update './lib/call.js'"))
  delete require.cache[file]
  require(file)
})