// The purpose of this is to parse through all the html files within the
// 'WordsThatContain' directory, gather all of the words in the file that
// are inside the a tag within the li tag with class 'defLink', and finally
// combine all of the extracted words into an exepctions dictionary
// stored at ./lib/exceptions.json

const cheerio = require('cheerio')
const fs = require('fs')
let path = './WordsThatContain'

fs.readdir(path, (err, files) => {
  if (err) {
    console.log('error: ' + err)
    process.exit(1)
  }
  files.forEach(file => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        console.log(`error reading file ${file}: ${err}`)
        process.exit(1)
      }
      const $ = cheerio.load(data)
      
    })
  })
})