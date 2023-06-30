"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);

let selectedCards = []; // Global variable to store clicked cards
let stopClicking = false;

/** Shuffle array items in-place and return shuffled array. */
function shuffle(items) {
  for (let i = items.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [items[i], items[j]] = [items[j], items[i]];
  }
  return items;
}

/** Create card for every color in colors (each will appear twice) */
function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    const card = document.createElement('div');
    card.id = color;
    card.classList.add(color);
    card.clicked = false; // Property to track if the card is clicked
    gameBoard.appendChild(card);
  }

  gameBoard.addEventListener("click", handleCardClick);
}

/** Flip a card face-up. */
function flipCard(card) {
  card.classList.toggle('flipped');
  card.style.backgroundColor = card.id;

}

/** Flip a card face-down. */
function unFlipCard(card) {
  card.classList.toggle('flipped');
  card.classList.toggle('clicked');
  setTimeout(() => {
    card.style.backgroundColor = '';
    stopClicking=false
  }, 1000);

}


/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  const clickedCard = evt.target;

  if (selectedCards.includes(clickedCard) ||stopClicking==true ||clickedCard.id==="game") {
    return; // Return early if the card ics already selected
  }

  clickedCard.clicked = true; // Mark the card as clicked
  selectedCards.push(clickedCard);
  if(selectedCards.length==2) stopClicking = true;



  console.log('id',clickedCard.id)


  flipCard(clickedCard);

  if (selectedCards.length <=2) {
    const firstCard = selectedCards[0];
    const secondCard = selectedCards[1];

    if(selectedCards.length == 2) {
      stopClicking = true;
    }


    if (firstCard.id === secondCard.id) {

      firstCard.classList.toggle('matched');
      secondCard.classList.toggle('matched');
      alert("MATCH");
      stopClicking = false;

      selectedCards = []; // Reset the selected cards array

      // Check if all cards are matched
      if (document.querySelectorAll('.matched').length === COLORS.length) {
        setTimeout(() => {
          alert("Congratulations! You have won the game!");
        }, FOUND_MATCH_WAIT_MSECS);
      }
    } else {
      setTimeout(() => {
        for (let card of selectedCards) {
          unFlipCard(card);
        }
        selectedCards = []; // Reset the selected cards array
        stopClickingCard= false
      }, FOUND_MATCH_WAIT_MSECS);
    }
  }
}




































