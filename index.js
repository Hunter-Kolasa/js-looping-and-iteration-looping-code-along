function writeCards(namesArray, occasion) {
    let cards = [];
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${occasion} gift!`);
    } 
    return cards
}

function countDown( countdownNumber) {
    while (countdownNumber > 0) {
        console.log(countdownNumber);
        countdownNumber -= 1;
    }
    console.log(countdownNumber)
}
