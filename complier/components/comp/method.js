const format = require("./format");

const praseMethod = (text,fileName) => {
    var func_mem=[];
    i=0
    var b = ''
    text.split(';', 100000).forEach(line=>{
        var a1='';
        a1+=line.replace('define method', 'function')
        if(a1[a1.length-1]!=='{'){
            a1+=';'
        }
        b+=a1;
    })
    return b
}

module.exports=praseMethod;