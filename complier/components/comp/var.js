const format=require('./format');
const fs=require('fs');

const varFunc= (fileName)=>{
    var mem_vars = [];
    const formatedFile=format(fileName);
    var lines=formatedFile.split(';', 100000);
    var result='';
    var i=0;
    lines.forEach(line=>{
        var currentVar=line.split('=',2);
        if(currentVar.length===2) {
            if(mem_vars.indexOf(currentVar[0])=== -1) {
                result+=`var ${currentVar[0]}=${currentVar[1]};`;
                mem_vars.push(currentVar[0])
            } else {
                result+=`${currentVar[0]}=${currentVar[1]};`;
            }
        } else {
            if(i+1!==lines.length){
                result+=`${line};`
            }
        }
        i++
    })
    return result;
}

module.exports=varFunc;