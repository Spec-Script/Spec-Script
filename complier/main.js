const varFunc=require('./components/comp/var')
const parseMethod = require('./components/comp/method')
const fs=require('fs')
const MainLangIncludes=require('./components/lang_includes/main');
const Cmd = require('./components/lang_includes/classes/node/Cmd');
class Compiler {
    static Complie(fileName,endFile,env) {
        var result='';
        try {
            result+=MainLangIncludes.getLangIncludes(env);
            result+=varFunc(fileName)
            console.log(result)
            result=parseMethod(result,fileName)
            console.log('hi')
            fs.writeFileSync(process.cwd()+`/${endFile}`,result)
            return 0;
        } catch (error) {
            Cmd.logWithRGBcolor(error, {red: 255,green:0,blue:0});
            Cmd.logWithRGBcolor(process.cwd(), {red:0,green:255,blue:0})
            return 1;
        }

    }
}
module.exports=Compiler;