//In weather.dat you’ll find daily weather data for Morristown, NJ for June 2002. Download 
// this text file, then write a program to output the day number (column one) with the smallest 
// temperature spread (the maximum temperature is the second column, the minimum the third column).

const {fetchFile} = require('./main');

class Weather extends fetchFile{
    static weatherDataSet = (data) => {
        var readAble = data.toString().split('\n');
        var twoDimension = readAble.map(rows => rows.trim().split(/\s+/));
        let min = 9999, Day = "";

        for (let i = 1; i < twoDimension.length; i++) {
            if (Math.abs(twoDimension[i][1] - twoDimension[i][2]) < min) {
                min = Math.abs(twoDimension[i][1] - twoDimension[i][2]);
                Day = twoDimension[i][0];
            }
        }
        console.log('Day - ' + Day + '\nSmallest Difference - ' + min);
    }
}

fetchFile
  .readFile('./weather.dat')
  .then(results => {
    Weather.weatherDataSet(results);
  })
  .catch(error => {
    console.log(error);
  })