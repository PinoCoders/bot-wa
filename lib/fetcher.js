let fetch = require('node-fetch')

async function getBuffer(url, opts = {}) {
response = await fetch(url, opts)
if (response.status !== 200) throw { status: response.status, message: response.statusText }
return response.buffer()
}

async function getJson(url, opts = {}) {
response = await fetch(url, opts)
if (response.status !== 200) throw { status: response.status, message: response.statusText }
return response.json()
}

exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})

async function getText(url, opts = {}) {
response = await fetch(url, opts)
if (response.status !== 200) throw { status: response.status, message: response.statusText }
return response.text()
}


module.exports = { buffer: getBuffer, json: getJson, text: getText }
