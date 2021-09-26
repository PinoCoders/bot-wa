let express = require('express')

let PORT = process.env.PORT || '8080'

function connect(conn) {
    let app = express()
    app.set("json spaces", 2)
    app.use(async (req, res) => {
        if (req.path == '/status') {
        let chats = conn.chats.array.filter(a => !a.jid.includes('status@broadcast'))
    let totalgc = chats.filter(a => a.jid.endsWith("g.us")).length
    let totalpc = chats.length - totalgc
        res.setHeader("User-Agent", "NAHOYA BOT")
        res.send({ status:200, 
        user: conn.user, 
        chats: { 
        all: chats.length, 
       group: totalgc, 
     personal: totalpc 
         }, 
         author: {
         instagram: 'https://instagram.com/xnoob_ganz',
         github: 'https://github.com/PinoRecode',
         youtube: 'https://youtube.com/c/PINOMODZ',
         website: 'https://api-recodeteam.herokuapp.com'
},
        source_code: 'https://github.com/PinoCoders/bot-wa'
})
    } else res.redirect("https://github.com/PinoCoders/bot-wa")
    })
    
 app.listen(PORT, () => console.log('App listened on port', PORT))
}

module.exports = connect
