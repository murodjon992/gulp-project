const fs = require('fs')
const path = './gulp/tasks'
const arr = fs.readdirSync(path)
.map(name => name = `${path}/${name}`)

module.exports = arr

console.log(fs);