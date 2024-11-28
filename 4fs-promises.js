//Esto solo en los modulos nativos que no tienen promesas nativas
// const {promisify}=require('node:util')
// const readFilePromise=promisify(fs.readFile)

const { error } = require('node:console')
const fs=require('node:fs/promises')
const { text } = require('stream/consumers')
// const text=fs.readFileSync('./hola.txt','utf-8')

console.log('Leyendo el primer archivo')
fs.readFile('./hola.txt','utf-8').then(text=>{
    console.log('primer texto',text)
})
console.log('Hacer cosas mientras lee')
fs.readFile('./hola2.txt','utf-8').then(text=>{
    console.log('segundo texto',text)
})