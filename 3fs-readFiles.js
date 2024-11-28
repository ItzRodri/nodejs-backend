

const { error } = require('node:console')
const fs=require('node:fs')
// const text=fs.readFileSync('./hola.txt','utf-8')

console.log('Leyendo el primer archivo')
fs.readFile('./hola.txt','utf-8',(err,text)=>{
    console.log(text)

})
console.log('Hacer cosas mientras lee')
fs.readFile('./hola2.txt','utf-8',(err,text)=>{
    console.log(text)

})