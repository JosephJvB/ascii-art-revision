const fs = require('fs')
const readline = require('readline')

console.log('welcome to my second visit to EDA')

console.log('')

listPicNames()

function listPicNames () {
  fs.readdir('./data', (err, files) => {
    if (err) throw err
    else {
      files.forEach((f, i) => console.log(`${i + 1}: ${f}`))
    }
  })
}
