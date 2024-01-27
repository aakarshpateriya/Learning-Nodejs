const fs = require('fs');

b = fs.writeFileSync('file.txt', "This is running by Mr comedian")
const a = fs.readFileSync('file.txt')
console.log(a.toString())
