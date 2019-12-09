// The file football.dat contains the results from the English Premier League for 2001/2. 
//  The columns labeled ‘F’ and ‘A’ contain the total number of goals scored for and 
//  against each team in that season (so Arsenal scored 79 goals against opponents, and had 36 goals scored against them).
//  Write a program to print the name of the team with the smallest difference in ‘for’ and ‘against’ goals.
const {fetchFile} = require('./main');
class Football extends fetchFile{

   static footballSmallestDiff = (data) => {
        var readAble = data.split('\n');
        var twoDimension = readAble.map(rows => rows.trim().split(/\s+/));
        let min = 9999, Team = "";

        for (let i = 1; i < twoDimension.length; i++) {
            if (Math.abs(twoDimension[i][8] - twoDimension[i][6]) < min) {
                min = Math.abs(twoDimension[i][8] - twoDimension[i][6]);
                Team = twoDimension[i][1];
            }
        }
        console.log('Team - ' + Team + '\nSmallest Difference - ' + min);
    }
}
fetchFile
  .readFile('./football.dat')
  .then(results => {
    Football.footballSmallestDiff(results);
  })
  .catch(error => {
    console.log(error);
  })