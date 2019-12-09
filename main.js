const fs= require('fs');
const csv = require ('fast-csv');

let data = '';

class fetchFile{
    static readFile(path){
        return new Promise((resolve,reject) => {
         fs.createReadStream(path)
.pipe(csv.parse({ headers: false })) 
.on('data', row => {
         data+=row+'\n';
     }).on('end', () => {
         if (data){
         resolve(data)
         }
         reject('error');
     })
 })
 }
}

module.exports = {fetchFile};