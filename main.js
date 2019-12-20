const fs = require('fs');
const csv = require('fast-csv');


class Main {
    readFile(file) {
        const data = [];
        return new Promise((resolve, reject) => {
            fs.createReadStream(file)
                .pipe(csv.parse({ headers: false }))
                .on('data', row => {
                    data.push(row);
                }).on('end', () => {
                    if (data) {
                        resolve(data)
                    }
                    reject('error');
                })
        })
    }

    fileRead(index, row, day, colM, colN) {
        let splited = [];
        let filteredData = [];
        let storedData = [];
        for (let i = index; i < row.length; i++) {
            splited = row[i][0].trim().replace("*", " ").split(" ");
            filteredData = splited.filter(data => data !== "");
            storedData.push([filteredData[day], Number(filteredData[colM]), Number(filteredData[colN])]);
        }
        return storedData;
    }

    diffData(newData) {
        let min = 999999;
        let ans = "";
        for (let value of newData) {
            if (min > Math.abs(value[1] - value[2])) {
                min = Math.abs(value[1] - value[2]);
                ans = "Set = " + value[0] + ", Minimum Value = " + min;
            }
        }
        console.log(ans);
    }

}

module.exports = { Main };