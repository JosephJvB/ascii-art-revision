const fs = require('fs')
const readline = require('readline')

function create () {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

console.log('welcome to my second visit to EDA')

console.log('')

listPicNames()

function listPicNames () {
  console.log('enter a number 1-4 to view a picture!')
  fs.readdir('./data', (err, files) => {
    if (err) throw err
    else {
      files.forEach((f, i) => console.log(`${i + 1}: ${f}`))
      const rl = create()
      rl.prompt()
      rl.on('line', input => {
        fs.readFile(`./data/${files[input]}`, 'utf8', (err, data) => {
          if (err) throw err
          else console.log(data)
        })
      })
    }
  })
}
