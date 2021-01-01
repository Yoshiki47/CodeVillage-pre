for (let point = 0; point < 101; point++) {
    if (point >= 90) {
        console.log(`${point} 秀`)
    } else if (point >= 75) {
        console.log(`${point} 優`)
    } else if (point >= 60) {
        console.log(`${point} 良`)
    } else if (point >= 30) {
        console.log(`${point} 可`)
    } else {
        console.log(`${point} 不可`)
    }
}

const num = Math.random()
if (num < 0.5) {
    console.log(`表: ${num}`)
} else {
    console.log(`裏: ${num}`)
}


//解答
const num = Math.random()
console.log(num)
if (num < 0.5) {
    console.log('表')
} else {
    console.log('裏')
}

//三項演算子
console.log(num < 0.5 ? '表' : '裏')
