"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

const colors = shuffle(COLORS);

createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    // missing code here ...

    const card=document.createElement('div')
    card.id=color
    card.classList.add(color)
    gameBoard.appendChild(card)

    }

    gameBoard.addEventListener("click",function(e) {


        handleCardClick(e)
  })

}


/** Flip a card face-up. */

function flipCard(card1,card2) {
  // ... you need to write this ...
  console.log('first: ',card1)
  console.log('second :',card2)
  // card.style.backgroundColor=card.id
  // unFlipCard(card)
}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...

  console.log('so far so good')
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
let firstCard=null
let secondCard = null
//toggle card attribute to'clicked'
let clickedCard=evt.target
clickedCard.classList.toggle('clicked')

//set first and second cards to the selected cards
let selectedCards=document.querySelectorAll("div.clicked")



if(selectedCards.length ==2){
  firstCard=selectedCards[0]
  secondCard=selectedCards[1]

}


flipCard(firstCard,secondCard)
}









