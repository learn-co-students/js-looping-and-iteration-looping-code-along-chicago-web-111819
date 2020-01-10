

// `for` loop noise
function writeCards(names, eventName) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let msg = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        messages.push(msg);
    }
    return messages;
}

// `while` loop noise
function countDown(startingNumber) {
    let i = startingNumber;
    while (i >= 0) {
        console.log(i);
        i--;
    }
}



