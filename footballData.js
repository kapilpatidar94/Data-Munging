const fs = require('fs') 
  
fs.readFile('./football.dat', (err, data) => { 
    if (err) throw err; 
  
    console.log(data.toString()); 
})