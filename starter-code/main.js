
// OLD CODE
// var cardOne = 'queen';
// var cardTwo = 'queen';
// var cardThree = 'king';
// var cardFour = 'king';
// last exercise, 
//if (cardTwo === cardFour)
// 		{alert: ("You found a match!");}
// else 	{alert: ("Sorry, try again.");} 


//My JS that hopefully creates the HTML for the cards

//Establishing cards array
var cards=['queen', 'king', 'queen', 'king'];

//is this the number of cards user is playing?
var cardsInPlay=[];

// create the board
var board = document.getElementById('game-board');

function createBoard() 
{ for (var i=0; i<cards.length; i++) 
  // create a div element which will be used as a card
    {var cardElement = document.createElement('div');
    // add styling
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);
    // when a card is clicked the function isTwoCards will be executed
    cardElement.addEventListener('click', isTwoCards);
    // append the card to the board
    board.appendChild(cardElement);
    board.appendChild(cardElement);
    }
}

//checks to see if there are cards in play
function isTwoCards() {

  // add card to array of cards in play
  // 'this' hasn't been covered in this prework, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for next try
    cardsInPlay = [];

  }

}
