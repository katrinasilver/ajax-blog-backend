const fs = require('fs')
const path = require('path')

const sync = (file, val) => {
  if (!val) {
    return JSON.parse(fs.readFileSync(path.join(__dirname, './data') + file, 'utf-8'))
  }
  else {
    return fs.writeFileSync(path.join(__dirname, './data') + file, JSON.stringify(val, null, 2), 'utf-8')
  }
}

module.exports = {
  sync
}
