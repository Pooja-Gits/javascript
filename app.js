function pickCard() {
    const arrCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
    const suit = ["Diamonds", "Spades", "Hearts", "Clubs"]
    const randCard = getRandomNumber(arrCards.length);
    const randSuit = getRandomNumber(suit.length);
    return {
        value: arrCards[randCard],
        suit: suit[randSuit]
    };
}

function getRandomNumber(n) {
    return Math.floor(Math.random() * n);
}

function pickCard() {
    const arrCards = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"]
    const suit = ["Diamonds", "Spades", "Hearts", "Clubs"]
    return {
        value: getRandom(arrCards),
        suit: getRandom(suit)
    };
}

function getRandom(arrCards) {
    const rand = Math.floor(Math.random() * arrCards.length);
    return arrCards[rand];
}