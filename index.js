function writeCards(names, occasion) {
    let ary = [];
    for (let i = 0; i < names.length; i++) {
        ary.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return ary;
}

function countDown(number) {
    for (let i = -1;  i != number; number--) {
        console.log(number)
    }
}