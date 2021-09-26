/*
Harta tahta by MFarelS

Website : mfarelsz.xyz
https://mfarelsz.xyz

YouTube : MFarelSZ
https://youtube.com/channel/UCYfBSMa1JJbKwD8bNm-etiA

Instagran : @mfarelsz
https://instagram.com

GitHub : MFarelS
https://github.com/MFarelS

Saweria : MFarelS
https://saweria.co/MFarelS
*/
require('../index')
let fs = require('fs')
let { spawn } = require('child_process')
async function tahta(text){
 return new Promise(async (resolve, reject) => {
  if (!global.support.magick && !global.support.convert) reject('ImageMagick Not Installed!')
  try {
var hartatahtaapa = text.replace(/(\S+\s*){1,23}/g, '$&\n')
    apa = 'HARTA\nTAHTA\n' + hartatahtaapa.toUpperCase()
    spawn(global.support.magick ? 'magick' : global.support.convert ? 'convert' : '', [
        '-gravity',
        'Center',
        '-size',
        '1280x1280',
        'xc:black',
        '-font',
        './src/BubbleShine.ttf',
        '-pointsize',
        '200',
        '-tile',
        './src/hartatahta-before.jpg',
        '-annotate',
        '+20+80',
        apa,
        '-wave',
        '10x175',
        './tmp/hartatahta-after.jpg'
    ])
    .on('error', (e) => {
        reject(e)
    })
    .on('exit', () => {
        resolve(fs.readFileSync('./tmp/hartatahta-after.jpg'))
        fs.unlinkSync('./tmp/hartatahta-after.jpg')
    })
   } catch (e) {
   reject(e)
}
   })
   }
   
module.exports = tahta
