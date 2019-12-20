const { Main } = require('./main');

class Weather extends Main {}
const mainFun = new Weather();

const startIndex = 2
const dayOfMonthColumn = 0
const maxTempColumn = 1
const minTempColumn = 2



mainFun
  .readFile('./weather.dat')
  .then(results => {
    const mydata = mainFun.fileRead(startIndex, results, dayOfMonthColumn, maxTempColumn, minTempColumn);
    mainFun.diffData(mydata);
  })
  .catch(error => {
    console.log(error);
  })