function getNewDeck() {

    return {
        initDeck() {
            const suits = ['hearts', 'clubs', 'diamonds', 'spades'];
            const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

            for (let suit of suits) {
                for (let value of values.split(",")) {
                    this.deck.push({ suit, value });
                }
            }
            return this;
        },
        deck: [],
        drawnCards: [],
        drawCard() {
            let card = this.deck.pop();
            this.drawnCards.push(card);
            return card;
        },
        drawMultiple(numCards) {
            let cardsDrawn = [];
            for (let i = 0; i < numCards; i++) {
                cardsDrawn.push(this.drawCard());
            }
            return cardsDrawn;
        },
        shuffle() {
            for (i = this.deck.length - 1; i >= 0; i--) {
                let randomIndex = Math.floor(Math.random() * this.deck.length);
                // if (i === randomIndex) randomIndex--;
                // let swapR = this.deck[i];
                // let swapN = this.deck[randomIndex];
                // this.deck[randomIndex] = swapR;
                // this.deck[i] = swapN;
                [this.deck[i], this.deck[randomIndex]] = [this.deck[randomIndex], this.deck[i]]
            }
        }
    }

}

const myDeck = getNewDeck();
myDeck.initDeck();
console.log(myDeck.deck.length);
console.log(myDeck.drawCard());
console.log(myDeck.deck.length);
console.log(myDeck.drawCard());
console.log(myDeck.deck.length);
console.log(myDeck.drawnCards);
console.log(myDeck.drawMultiple(5));
console.log(myDeck.drawnCards);
console.log(myDeck.deck.length);
