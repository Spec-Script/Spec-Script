const readFile=require('../read');
const path=require('path');
const format = (fileName)=>{
    var fileDataOne=readFile(path.join('C:\\Users\\gllup\\Desktop\\Settings\\Data\\javascriptCompiler\\', `/${fileName}`))
    var completed = ``;
    fileDataOne.replace('\n', 's')
    var fileData=fileDataOne.split('\r', 10000);
    console.log(fileData)
    fileData.map((raw)=>{
        var comp = raw.replace(/(\r\n|\n|\r)/gm,"");
        completed+=comp+';'
    })
    return completed
}


module.exports=format;

