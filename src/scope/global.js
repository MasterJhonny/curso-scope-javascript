 var hello = 'Hola Mundo'
var hello = 'Hello plus plus'
let world = 'Hola mundillo'
const helloWorld = 'Hello World!'
// console.log(hello)


const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()



const helloWorld = () => {
    global = 'variable sin palabra reservada'
}

helloWorld()
console.log(global)