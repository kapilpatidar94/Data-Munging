const { Main } = require('./main');
class Football extends Main { }

const mainFun = new Football();

const startIndex = 1
const teamNameColumn = 1
const goalScoredColumn = 8
const goalAgainsColumn = 6
mainFun
  .readFile('./football.dat')
  .then(results => {
    const mydata = mainFun.fileRead(startIndex, results, teamNameColumn, goalScoredColumn, goalAgainsColumn);
    mainFun.diffData(mydata);
  })
  .catch(error => {
    console.log(error);
  })