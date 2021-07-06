// Code your solutions in this file
function writeCards(namesArray, event) {
    let thankYouArray = []
    for (let i = 0; i < namesArray.length; i++) {
        thankYouArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return thankYouArray
}

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num -= 1
    }
}