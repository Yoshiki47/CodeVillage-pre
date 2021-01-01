// 06-1.

// n * 100 - 5
const mulMinus = x => x * 100 - 5
const n = 5
console.log(mulMinus(n))

//(n + 3) * 8 + 3
const mulPlus = x => (x + 3) * 8 + 3
const n = 2
console.log(mulPlus(n))


//06-1.map
const items = [
    // 日  月  火  水  木  金  土
    [14, 93, 89, 51, 85, 59, 33],
    [69, 27, 40, 76, 25, 21, 55],
    [55, 60, 3, 28, 49, 5, 91],
    [19, 56, 92, 66, 53, 80, 13],
]

const sums = items.map((item) => {
    let i = 0;
    item.forEach((item) => {
        i += item;
    })
    return i;
})
console.log(sums) //=> [424, 313, 291, 379]