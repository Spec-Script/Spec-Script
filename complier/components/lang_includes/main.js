const fs=require('fs')
const path=require('path')
class MainLangIncludes {
    static getLangIncludes(env) {
        var completed = '';
        completed+=fs.readFileSync(path.join(__dirname, 'classes', env==='browser'?'browser/Browser.js':'node/Cmd.js'))
        completed+=fs.readFileSync(path.join(__dirname, 'replaceFuncs.js'))
        return completed;
    }
}
module.exports=MainLangIncludes;