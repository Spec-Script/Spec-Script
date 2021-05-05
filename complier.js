#!/usr/bin/env node
const Compiler=require('./complier/main')

const fileToCompile=process.argv[process.argv.length-1].substring(2,process.argv[process.argv.length-1].length)
const to = process.argv[process.argv.length-2].substring(2,process.argv[process.argv.length-2].length)

console.log(Compiler.Complie(fileToCompile,to, 'browser')) // change 'browser' to 'node' if you want the script to compile in a nodejs env
