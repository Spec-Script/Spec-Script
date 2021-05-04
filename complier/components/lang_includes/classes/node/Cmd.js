const chalk=require('chalk')
const readline = require('readline');
class Cmd {
    static askQuestion(query) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        return new Promise(resolve => rl.question(query, ans => {
            rl.close();
            resolve(ans);
        }))
    }
    static logWithRGBcolor(text,{red,green,blue}) {
        console.log(chalk.rgb(red,green,blue)(text))
    }

}
module.exports = Cmd;