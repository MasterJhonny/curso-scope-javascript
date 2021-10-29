const moneyBox = (coins) => {
    var saveCoins = 0
    saveCoins += coins
    console.log(saveCoins)
}

moneyBox(3)
moneyBox(7)
moneyBox(12)

const moneyBox = () => {
    var saveCoins = 0
    const countCoins = (coins) => {
        saveCoins += coins
        console.log(saveCoins)
    }
    return countCoins
}

let myMoneyBox = moneyBox()

myMoneyBox(12)
myMoneyBox(12)
myMoneyBox(12)
