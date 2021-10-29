// frist case block scope
const fruits = () => {
    if(true) {
        var fruit1 = 'apple';
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';
        console.log(fruit2)
        console.log(fruit3)
    }
    console.log(fruit1)
}
fruits()

// second case block scope
let x = 1;
{
    let x = 2;
    console.log(x)
}
console.log(x)

// three case block scope
const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 500)
    }
}

anotherFunction()