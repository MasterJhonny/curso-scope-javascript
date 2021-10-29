const buildCount = (i) => {
    let count = i;
    return () => console.log(++count)
}

const myCount = buildCount(1)

myCount()
myCount()
myCount()
