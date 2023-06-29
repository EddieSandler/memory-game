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
  }, "1000");
}

/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  const clickedCard = evt.target;

  if (selectedCards.includes(clickedCard)) {
    return; // Return early if the card is already selected
  }

  clickedCard.clicked = true; // Mark the card as clicked
  selectedCards.push(clickedCard);

  flipCard(clickedCard);

  if (selectedCards.length === 2) {
    const firstCard = selectedCards[0];
    const secondCard = selectedCards[1];

    if (firstCard.id === secondCard.id) {
      alert("MATCH");
      firstCard.classList.toggle('matched');
      secondCard.classList.toggle('matched');

      let matched = document.querySelectorAll("div.matched");
      return matched
    } else {
      for (let card of selectedCards) {
        unFlipCard(card);
      }
    }

    selectedCards = []; // Reset the selected cards array
  }
}
