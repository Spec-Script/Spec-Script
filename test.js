const format = require("./complier/components/comp/format")

var i = 
`
message="hi"
define method hilol() {
    log('Hiii')
}
log(message)
message="hello"
define method hilol() {
    log('Duplicate')
}
log(message)
`

var formatedText=format('main.spec')
var b = ''
formatedText.split(';', 100000).forEach(line=>{
    b+=line.replace('define method', 'function')
})
console.log(b)
