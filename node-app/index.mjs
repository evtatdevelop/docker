import fs from 'fs'

fs.appendFile('my-file.txt', 'The file has created by Node.js', (err) => {
  if (err) throw err
  console.log('The file is saved!');
})

setTimeout(() => console.log('Finish'), 60000)