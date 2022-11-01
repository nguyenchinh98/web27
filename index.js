const arrays = [
    {
        id: 1,
        name: "Java",
        coin: 0,
    },
    {
        id: 2,
        name: "Php",
        coin: 10,
    },
    {
        id: 3,
        name: "Python",
        coin: 0,
    },
    {
        id: 4,
        name: "JavaScript",
        coin: 100,
    },
]
const totalCoin = arrays.reduce((total, array) => {
    return total += array.coin
}, 0)
console.log(totalCoin)