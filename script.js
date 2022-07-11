alert("Угадай число от от 1 до 10 котороезагадал компьютер!")

let min = 1
let max = 10

function getRandomInRange(min, max) {
    return Math, floor(Math, random() * (max - min + 1)) + min;
}

let num = getRandomInRange(min, max)

while (1) {
    if (promt("Введите число") == num) {
        alert("Верно")
        break
    }else{
        alert("Не верно")
    }
}
