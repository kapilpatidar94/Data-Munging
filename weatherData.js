const fs = require('fs') 

//In weather.dat you’ll find daily weather data for Morristown, NJ for June 2002. Download 
// this text file, then write a program to output the day number (column one) with the smallest 
// temperature spread (the maximum temperature is the second column, the minimum the third column).

fs.readFile('./weather.dat', (err, data) => { 
    if (err) throw err; 
    weatherFind(data); 
})

const weatherFind = (data) => {
    console.log(fs.ReadStream(data));
}