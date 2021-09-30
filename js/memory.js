export class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {

    if (!this.cards) {
      return undefined;
    };

    let copyOfCards = [...this.cards];
    let shuffledCards = [];

    while (copyOfCards.length) {
      let randomIndex = Math.floor(Math.random()*copyOfCards.length);
      let randomCard = copyOfCards[randomIndex];

      shuffledCards.push(randomCard);
      copyOfCards.splice(randomIndex, 1);
    }

    this.cards = shuffledCards;
    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length/2) {
      return true;
    }
    return false;
  }
};

// The following is required for automated testing. Please, ignore it.
// if (typeof module !== 'undefined') module.exports = MemoryGame;
