// declaracion de la function 
const newCount = (count = 0) => {
    return {
        increment: () => console.log(++count), 
        decrement: () => console.log(--count),
        get: () => console.log(count)
    }
}
// creacion de un new contador
let contador1 = newCount()

contador1.increment()
contador1.increment()
contador1.increment()
contador1.decrement()
contador1.decrement()
contador1.get()

