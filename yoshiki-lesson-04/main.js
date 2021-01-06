// 配列
const array = [1, 2, 3]

array.splice(0, 1)
console.log(array) //=> [2, 3]

array.push(5)
console.log(array) //=> [2, 3, 5]

array.splice(1, 2)
console.log(array) //=> [2]

array[0] = 100
console.log(array) //=> [100]


// コインを投げるプログラム
function cointoss() {
    const num = Math.random() // numは0.0〜1.0のランダムな数値

    if (num < 0.5) {
        console.log('表')
    } else {
        console.log('裏')
    }
}

for (let i = 1; i <= 10; i++) {
    cointoss()
}


// 成績判定プログラム
function scoring(score) {
    if (score >= 90) {
        return score = '秀'
    } else if (score >= 75) {
        return score = '優'
    } else if (score >= 60) {
        return score = '良'
    } else if (score >= 30) {
        return score = '可'
    } else {
        return score = '不可'
    }
}

// 動作確認
console.log(scoring(100)) //=> 秀
console.log(scoring(80)) //=> 優
console.log(scoring(60)) //=> 良
console.log(scoring(40)) //=> 可
console.log(scoring(13)) //=> 不可


//複数人の成績判定プログラム
const scores = [13, 67, 18, 54, 30, 22, 89, 49, 21, 65]

function scoring(score) {
    if (score >= 90) {
        return score = '秀'
    } else if (score >= 75) {
        return score = '優'
    } else if (score >= 60) {
        return score = '良'
    } else if (score >= 30) {
        return score = '可'
    } else {
        return score = '不可'
    }
}

scores.forEach((score) => {
    console.log(scoring(score))
})
