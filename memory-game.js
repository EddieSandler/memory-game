"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

let score = 0;
const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

// function to start the game
function startGame() {
  const startButton=document.getElementById("btn_start")// start button to launch the game

const colors = shuffle(COLORS);
createCards(colors);
}

const startButton=document.getElementById("btn_start")// start button to launch the game
startButton.addEventListener("click",startGame);





let selectedCards = []; // array to store clicked cards
let stopClicking = false;// flag created to limit clicking  on  only 2 different cards

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
  startButton.removeEventListener("click",startGame);
  gameBoard.addEventListener("click", handleCardClick);// listen for clicks on cards
}

/** Flip a card face-up. */
function flipCard(card) {
  card.classList.toggle('flipped');
  card.style.backgroundColor = card.id;//change color of card

}

/** Flip a card face-down. */
function unFlipCard(card) {
  card.classList.toggle('flipped');
  card.classList.toggle('clicked');
  setTimeout(() => {
    card.style.backgroundColor = ''; // resets cards when unmatched
    stopClicking=false
    card.style.backgroundColor = '';
    console.log('')
  }, 1000);

}


/** Handle clicking on a card: this could be first-card or second-card. */
function handleCardClick(evt) {
  const clickedCard = evt.target;

  if (selectedCards.includes(clickedCard) ||stopClicking==true ||clickedCard.id==="game") {
    return; // prevents clicking on same card twice or clicks between the cards on the board
  }

  clickedCard.clicked = true; // Mark the card as clicked
  selectedCards.push(clickedCard); //add selected cards to array
  if(selectedCards.length==2) {
    stopClicking = true; // prevent clicking while comparing cards
  score++    // increment number of guesses
  document.getElementById('guesses').innerHTML=score; //
  }



  flipCard(clickedCard);

  if (selectedCards.length <=2) {
    const firstCard = selectedCards[0];   // defines the 2 cards selected
    const secondCard = selectedCards[1];

    if(selectedCards.length == 2) {
      stopClicking = true;  // 2 cards clicked, prevent any more clicking
    }

// compares 2 selected cards  - NOTE: need to  put this in a separate matching function
    if (firstCard.id === secondCard.id) { // cards match
      firstCard.classList.toggle('matched');
      secondCard.classList.toggle('matched');
      alert("MATCH");
      stopClicking = false;

      selectedCards = []; // clears out the selected cards

      // Check if all cards are matched
      if (document.querySelectorAll('.matched').length === COLORS.length) {
        setTimeout(() => {
          alert("Game Over");
          PlayAgain()
          
        }, FOUND_MATCH_WAIT_MSECS);
      }
    } else {
      setTimeout(() => {
        for (let card of selectedCards) {
          unFlipCard(card);
        }
        selectedCards = []; // Reset the selected cards array
        console.log(""); //put this in to prevent clicking when matched
      }, FOUND_MATCH_WAIT_MSECS);
    }
  }

  function PlayAgain() {
  let resetButton= document.createElement('BUTTON')
  resetButton.innerHTML="Play Again"
  document.body.append(resetButton)

  resetButton.addEventListener("click",newGame);
  }

  function newGame() {
   
    location.reload()
    resetGame();
    
  }
}






































































