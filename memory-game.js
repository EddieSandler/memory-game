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

      // console.log(e.target.classList)




        handleCardClick(e)
  })

}


/** Flip a card face-up. */

function flipCard(card) {
  // ... you need to write this ...
  card.classList.toggle('flipped')
  card.style.backgroundColor=card.id

 let flippedCards=document.querySelectorAll("div.flipped")

let score =0

 let firstCard=flippedCards[0]
//  console.log(firstCard.id)


 if(flippedCards.length > 1) {
 let secondCard=flippedCards[1] //
  // console.log(secondCard.id)
  if (firstCard.id === secondCard.id){
    console.log("MATCH")
    firstCard.classList.toggle('matched')
    secondCard.classList.toggle('matched')
    // console.log(secondCard.classList)


    let matched=document.querySelectorAll("div.matched")
    console.log(matched)
    for(let element of matched){
      element.remove()
    }



    //can i remove the event listener for these cards
    // document.removeEventListener('click',function(e){
      // handleCardClick(e)
    // })




  } else {
    for(card of flippedCards) {
      unFlipCard(card)
    }
  }
}
 }


/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...

  card.classList.toggle('flipped')
  card.classList.toggle('clicked')
  setTimeout(() => {
    card.style.backgroundColor='';
  }, "1000");

}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {

// //toggle card attribute to'clicked'
let clickedCard=evt.target

clickedCard.classList.toggle('clicked')

//set first and second cards to the selected cards
let selectedCards=document.querySelectorAll("div.clicked")




if(selectedCards.length<=2){
  flipCard(clickedCard)
}

}









