require('./config')
let awesome = require('awesome-phonenumber')
let {
MessageType,
WAConnection,
Browsers
} = require('@adiwajshing/baileys')
let { color, bgcolor } = require('./lib/color')
const cp = require('child_process')
const simple = require('./lib/simple.js')
const WAPI = simple.WAConnection(WAConnection)
let fs = require('fs')
let os = require('os')
let figlet = require('figlet')
let authfile = './session.json'
async function mulai() {
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '')
let caliph = new WAPI()
caliph.browserDescription = Browsers.appropriate('Desktop')
caliph.logger.level = 'warn'
console.log(color(figlet.textSync('Base Wabot', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
console.log(color('[ CREATED BY RECODE TEAM ]'))
caliph.on('qr', async () => {
console.log('Scan kode qr ini untuk menjalankan bot')
})
fs.existsSync(authfile) && caliph.loadAuthInfo(authfile)
	caliph.on('connecting', () => {
		console.log(color('[RecodeTeam]', 'cyan'), color('Connecting...', 'yellow'))
	})
	caliph.on('close', () => {
		console.log(color('[RecodeTeam]', 'cyan'), color('Reconnecting....', 'yellow'))
	})
	caliph.on('open', (ye) => {
		console.log(color('[RecodeTeam]', 'cyan'), color('Connected...', 'green'))
	})
	await caliph.connect().then(async v => {
        global.server ? require('./server')(caliph) : ''
	console.log(`Nama Bot : ${caliph.user.name}\nID Bot : ${awesome('+'+caliph.user.jid.split('@')[0]).getNumber('international')}\n\nMode : ${selfmode ? 'Self Mode' : 'Public Mode'}\nHostname : ${os.hostname()}`)
		fs.writeFileSync(authfile, JSON.stringify(caliph.base64EncodedAuthInfo(), null, '\t'))
	owner.map(a => caliph.reply(a + "@c.us", 'Bot Started.....'))
		})
    caliph.on('CB:action,,call', id => {
    require('./message/call')(caliph, id)
    })
    caliph.on('group-participants-update', async (anu) => {
	console.log(anu)
	require('./message/detect')(caliph, anu)
	})
	caliph.on('CB:action,,battery', json => {
      caliph.battery = Object.fromEntries(Object.entries(json[2][0][1]).map(v => [v[0], eval(v[1])]))
      })
      caliph.on('message-delete', async (m) => {
      require('./message/antidelete')(caliph, m)
    })
    caliph.on('chat-update', async chatUpdate => {
    try {
     if (!chatUpdate.hasNewMessage) return   
     if (!chatUpdate.messages && !chatUpdate.count) return
    
 let msg = chatUpdate.messages.all()[0]
	 if (!msg.message) return
     msg.message = msg.message.hasOwnProperty('ephemeralMessage') ? msg.message.ephemeralMessage.message : msg.message
	if (msg.key && msg.key.remoteJid == 'status@broadcast') return 
	if (!msg.key.fromMe && selfmode) return
	simple.smsg(caliph, msg)
	if(autoread) caliph.chatRead(msg.chat)
    require('./message/caliph')(caliph, msg)
    } catch (e) {
    console.log(color('[ERR]', 'cyan'), color(e, 'red'))
    }
    })
    }
    async function _quickTest() {
  let test = await Promise.all([
    cp.spawn('ffmpeg'),
    cp.spawn('ffprobe'),
    cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
    cp.spawn('convert'),
    cp.spawn('magick'),
    cp.spawn('gm'),
  ].map(p => {
    return Promise.race([
      new Promise(resolve => {
        p.on('close', code => {
          resolve(code !== 127)
        })
      }),
      new Promise(resolve => {
        p.on('error', _ => resolve(false))
      })
    ])
  }))
  let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm] = test
  console.log(test)
  let s = global.support = {
    ffmpeg,
    ffprobe,
    ffmpegWebp,
    convert,
    magick,
    gm
  }
  require('./lib/sticker').support = s
  Object.freeze(global.support)
  }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color("Update './index.js'", 'red'))
  delete require.cache[file]
  require(file)
})

mulai()
_quickTest()
