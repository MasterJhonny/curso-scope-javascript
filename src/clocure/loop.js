// loops
const anotherFunction = () => {
    for(var i = 0; i < 10; i++) {
        (function(n){
            setTimeout(() => console.log(n), 500)
        })(i)
    }
}

anotherFunction()
// 0, 1, 2, 3.....