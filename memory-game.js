"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */


const FOUND_MATCH_WAIT_MSECS = 1000;
const COLORS = [
  "red", "blue", "green", "orange", "purple",
  "red", "blue", "green", "orange", "purple",
];

// function to start the game
function resetGame() {
const colors = shuffle(COLORS);
createCards(colors);
}

const startButton=document.getElementById("btn_start")// start button to launch the game
startButton.addEventListener("click",resetGame);





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
<<<<<<< HEAD
    card.style.backgroundColor = ''; // resets cards when unmatched
    stopClicking=false
=======
    card.style.backgroundColor = '';
    console.log('')
>>>>>>> f712fc55df346e513fcc22db2410537521619282
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
  if(selectedCards.length==2) stopClicking = true; // prevent clicking while comparing cards




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
          alert("Congratulations! You have won the game!");
          newGame()
        }, FOUND_MATCH_WAIT_MSECS);

        //create  a reset button
        //add event listener
        //execute resetGame if clicked




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

  function newGame() {
    let resetButton= document.createElement('BUTTON')
    resetButton.innerHTML="Play Again"
    document.body.append(resetButton)
      document.querySelectorAll("#container").backgroundColor=""

        resetButton.addEventListener('click',resetGame)
  }
}













// "use strict";

// /** Memory game: find matching pairs of cards and flip both of them. */


// const FOUND_MATCH_WAIT_MSECS = 1000;
// const COLORS = [
//   "red", "blue", "green", "orange", "purple",
//   "red", "blue", "green", "orange", "purple",
// ];
// // const startButton=document.getElementById("btn_start")
// // startButton.addEventListener("click",createCards(colors))
// const colors = shuffle(COLORS);

// createCards(colors);

// let selectedCards = []; // Global variable to store clicked cards
// let stopClicking = false;

// /** Shuffle array items in-place and return shuffled array. */
// function shuffle(items) {
//   for (let i = items.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * i);
//     [items[i], items[j]] = [items[j], items[i]];
//   }
//   return items;
// }

// /** Create card for every color in colors (each will appear twice) */
// function createCards(colors) {
//   const gameBoard = document.getElementById("game");

//   for (let color of colors) {
//     const card = document.createElement('div');
//     card.id = color;
//     card.classList.add(color);
//     card.clicked = false; // Property to track if the card is clicked
//     gameBoard.appendChild(card);
//   }

//   gameBoard.addEventListener("click", handleCardClick);
// }

// /** Flip a card face-up. */
// function flipCard(card) {
//   card.classList.toggle('flipped');
//   card.style.backgroundColor = card.id;

// }

// /** Flip a card face-down. */
// function unFlipCard(card) {
//   card.classList.toggle('flipped');
//   card.classList.toggle('clicked');
//   setTimeout(() => {
//     card.style.backgroundColor = '';
//     stopClicking=false
//   }, 1000);

// }


// /** Handle clicking on a card: this could be first-card or second-card. */
// function handleCardClick(evt) {
//   const clickedCard = evt.target;

//   if (selectedCards.includes(clickedCard) ||stopClicking==true ||clickedCard.id==="game") {
//     return; // Return early if the card ics already selected
//   }

//   clickedCard.clicked = true; // Mark the card as clicked
//   selectedCards.push(clickedCard);
//   if(selectedCards.length==2) stopClicking = true;




//   flipCard(clickedCard);

//   if (selectedCards.length <=2) {
//     const firstCard = selectedCards[0];
//     const secondCard = selectedCards[1];

//     if(selectedCards.length == 2) {
//       stopClicking = true;
//     }


//     if (firstCard.id === secondCard.id) {

//       firstCard.classList.toggle('matched');
//       secondCard.classList.toggle('matched');
//       alert("MATCH");
//       stopClicking = false;

//       selectedCards = []; // Reset the selected cards array

//       // Check if all cards are matched
//       if (document.querySelectorAll('.matched').length === COLORS.length) {
//         setTimeout(() => {
//           alert("Congratulations! You have won the game!");
//         }, FOUND_MATCH_WAIT_MSECS);
//       }
//     } else {
//       setTimeout(() => {
//         for (let card of selectedCards) {
//           unFlipCard(card);
//         }
//         selectedCards = []; // Reset the selected cards array
//         console.log("");
//       }, FOUND_MATCH_WAIT_MSECS);
//     }
//   }
// }


































































