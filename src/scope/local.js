const helloWorld = () => {
    const hello = 'hello world';
    console.log(hello)
}

helloWorld()

// console.log(hello)

// hacer una scape local 
var scope = 'I am global';

const functionScope = () => {
    var scope = 'I am local';
    const fun = () => {
        return scope
    }
    console.log(fun())
} 

functionScope()
console.log(scope)