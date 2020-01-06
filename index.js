// Code your solutions in this file
function writeCards(cards) {
    let writtenCards = []
    for (let i = 0; i < cards.length; i++) {
        writtenCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return writtenCards;
};

function countDown(num){
    let i = num;
    while (num != -1) {
        console.log(num);
        num = num - 1;
    }
}