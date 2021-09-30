import { MemoryGame } from './memory.js';

const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

let html = '';
memoryGame.shuffleCards();
memoryGame.cards.forEach((card) => {
  html += `
    <div class="card" data-card-name="${card.name}">
      <div class="back" name="${card.img}"></div>
      <div class="front" style="background: url(img/${card.img}) no-repeat"></div>
    </div>
  `;
});

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  function cardClicked(card) {
    console.log(`Card clicked: ${card}`);

    // Decide what to do depending on whether a pair has been picked
    if (memoryGame.pickedCards.length === 0) {
      card.classList.add("turned");
      memoryGame.pickedCards.push(card);

    } else if (memoryGame.pickedCards.length === 1) {

      card.classList.add("turned");
      memoryGame.pickedCards.push(card);
      pairClicked();

    } else if (memoryGame.pickedCards.length === 2) {
      // This used to work before I complicated everything trying to make it so an impatient player would have the first 2 cards turn down faster
      // I used a function impatientPlayer() that tested if 3 cards were up and waited extra long if not, but it did not work
        alert("Not so fast please!!")
    }
  }
  
  function pairClicked() {

    if (memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"), memoryGame.pickedCards[1].getAttribute("data-card-name"))) {
      
      memoryGame.pickedCards[0].classList.add("blocked");
      memoryGame.pickedCards[1].classList.add("blocked");

      memoryGame.pickedCards = [];

      if (memoryGame.checkIfFinished()) {
        let timeoutIdWin = setTimeout(() => alert("You won!!"), 500);
        // I used a setTimeout so that there is time for the animation on the last card
      };

  } else {

      let temporaryCard1 = memoryGame.pickedCards[0];
      let temporaryCard2 = memoryGame.pickedCards[1];

      memoryGame.pickedCards = [];

      let timeoutId = setTimeout(() => {
        temporaryCard1.classList.remove("turned");
        temporaryCard2.classList.remove("turned");
      }, 1500); 


  }

    // This depends on checkIfPair so it has to go here although I'd rather put it before the if
    let displayPairsClicked = document.querySelector("#pairs-clicked");
    displayPairsClicked.textContent = memoryGame.pairsClicked;

    let displayPairsGuessed = document.querySelector("#pairs-guessed");
    displayPairsGuessed.textContent = memoryGame.pairsGuessed;

}

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      cardClicked(card);
    });
  });
