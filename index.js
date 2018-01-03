const fs = require('fs')
const readline = require('readline')

function create () {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
}

const niceThings = ['lovely', 'beautiful', 'pretty', 'sexy', 'ravishing', 'radiant', 'patriotic', 'sweet-as', 'neat', 'handsome', 'graceful', 'comely', 'charming', 'foxy', 'boss-ass']

console.log('welcome to my second visit to EDA')

console.log('')

listPicNames()

function listPicNames () {
  console.log('enter a number 1-4 to view a picture! (q to quit)')
  fs.readdir('./data', (err, files) => {
    if (err) throw err
    else {
      files.forEach((f, i) => console.log(`${i + 1}: ${f.split('.')[0]}`))
      readIt(files)
    }
  })
}

function readIt (files) {
  const rl = create()
  rl.prompt()
  rl.on('line', input => {
    if (input === 'q') process.exit()
    let pic = files[input - 1]
    fs.readFile(`./data/${pic}`, 'utf8', (err, data) => {
      if (err) errorHandler(rl)
      else {
        const r = Math.floor(Math.random() * niceThings.length)
        console.log(data)
        setTimeout(() => console.log(`what a ${niceThings[r]} ${pic.split('.')[0]}!`), 1000)
        setTimeout(lottaLogs, 1002)
        rl.close()
        setTimeout(listPicNames, 2000)
      }
    })
  })
}

function errorHandler (r) {
  r.close()
  console.log('')
  console.log('whoops, something went wrong!')
  lottaLogs()
  setTimeout(() => console.log('please try again :)'), 700)
  setTimeout(lottaLogs, 702)
  setTimeout(listPicNames, 1200)
}

function lottaLogs () {
  console.log('')
  console.log('')
  console.log('')
}
