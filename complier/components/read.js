const fs=require('fs')
const fileData = (fileName)=>{
    return fs.readFileSync(fileName, 'utf8');
}

module.exports = fileData;