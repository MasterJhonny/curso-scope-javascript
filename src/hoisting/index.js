// first case of hoisting
a = 2
console.log('Hola Mundo')
var a;
console.log(a) // 2

// second case of hoisting
console.log(a)
var a = 3

// three case of hoisting
saludar("Belen")
function saludar(nombre){
    console.log(`Hi, my name is ${nombre}`)
}
