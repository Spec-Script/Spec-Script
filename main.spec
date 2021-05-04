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