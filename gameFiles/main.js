//cards from Byron Knoll: http://code.google.com/p/vector-playing-cards/
//got some ideas from http://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
//on how to approach the game and MDN and W3schools for syntax and general help
//spoke to Rajiste Bennin about some of the logistics as we were working
//on similar games. Raj suggested the fishcer yates shuffle. For some reason
//my initial shuffle function would keep adding to the deck or make doubles

var suits =['diamonds', 'clubs', 'hearts', 'spades'];
var cards = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'];
var deck = [];
var player = [];
var dealer = [];
var playerBox = document.getElementById('playerBox');
var dealerBox = document.getElementById('dealerBox');
var makeImg = document.createElement('img');
var buttonSwitch =1;

//generates a deck of 52 cards from the suits and cards arrays above
function createDeck() {
  for(var i=0;i<cards.length;i++) {
    for(var j=0; j< suits.length; j++) {
        var value = parseInt(cards[i]);
          if(cards[i] =='ace') {
           var worth = 11;
          } else if (value > 1 && value < 10){
          worth = value++;
          } else if(value >= 10) {
          worth =10;
          }
        var card = {
          Card: cards[i],
          Suit: suits[j],
          Worth: worth,
          Image: 'cards/' + cards[i] + '_of_' + suits[j] + '.png'};
        deck.push(card);
    }
  }
}

// function cardValue() {
//   for(k=0;k<deck.length;k++){
//     var worth = parseInt(cards[k]);
//       if(cards[k] ===0) {
//       worth =11;
//       } else if (worth > 1 && worth < 10){
//       worth = worth++;
//       } else {
//       worth =10;
//       }
//       card[i].value = card[k].worth;
//   }
//   return card;
// }

//fischer yates shuffle as suggested by Raj
//https://bost.ocks.org/mike/shuffle/
function shuffle(deck) {
  var m = deck.length, t, i;

  // While there remain elements to shuffle…
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }

  return deck;
}


//this shuffle function was not working
//function shuffle() {
//var cut = deck[Math.floor(Math.random()*deck.length--)];
//var cutDeck =deck.push(cut);
//return cutDeck;

//had deal as one big function got suggestion to seperate it
//also tried the pop push which was just more lines first
function dealPlayer() {
  if (deck.length > 0) {
    let newCard = deck.shift();
    let image = document.createElement('img');
    image.src = newCard.Image;
    playerBox.append(image);
    player.push(newCard);
  }
}

function dealDealer() {
  if (deck.length > 0) {
    let newCard = deck.shift();
    let image = document.createElement('img');
    image.src = newCard.Image;
    dealerBox.append(image);
    dealer.push(newCard);
  }
}

function dealerScore() {
var dealerTotal =0;
console.log(dealer.length);
  for ( i = 0; i < dealer.length; i++) {
      if (dealer[i].card == 'ace' && dealerTotal >= 21) {
        dealer[i].Worth = 1;
        dealerTotal += dealer[i].Worth;
      } else {
      dealerTotal += dealer[i].Worth;
      }
    }
  return dealerTotal;
  }

function playerScore() {
var playerTotals =0;
console.log(player.length);
  for ( i =0; i < player.length; i++) {
    if (player[i].card =='ace') {
        player[i].Worth = 1;
        playerTotals += player[i].Worth;
        } else {
        playerTotals += player[i].Worth;
        }
    }
  return playerTotals;
}


//failed toggle button for deal/newGame
// $("deal").on("click", deal);

// function switchBtn() {
//     if ( action == 1 ) {
//        deal();
//         action = 2;
//     } else {
//         newGame();
//         action = 1;
//     }
// }


function deal(){
  createDeck();
  shuffle(deck)
  dealPlayer();
  dealDealer();
  dealPlayer();
  dealDealer();
  document.getElementById("deal").disabled = true;
}


 function hit(){
  let dealerTotal =dealerScore();
  if(player.length < 5 && dealerTotal <21 ){
    dealPlayer();
  } else {
    document.getElementById("hit").onclick = function() {
    this.disabled = true;
    }
      checkWin();
      checkWinner();
  }

}


function hitDealer(){
  let dealerTotal =dealerScore();
  if(dealer.length < 5){
  dealDealer();
  }
}



function stand() {
  checkWin();
  checkWinner();
}

function checkWin(){
let dealerTotal = dealerScore();
  for(i=0; i < dealer.length; i++){
    if (i < 5 && dealerTotal < 17){
      console.log('whatever')
      hitDealer();
    }
  }
}

function checkWinner(){
  let playerTotal = playerScore();
  let dealerTotal =dealerScore();
  var messageSpan = document.getElementById('messageSpan');
  if (playerTotal < 21 && dealerTotal < 21 && playerTotal < dealerTotal) {
      messageSpan.innerText = `${playerTotal} to ${dealerTotal} Dealer Wins!`;
      console.log('Dealer Wins!');
    } if (dealerTotal > 21 && playerTotal > 21) {
      rmessageSpan.innerText = `${playerTotal} to ${dealerTotal} Dealer Wins!`;
      console.log('Dealer Wins!');
      } if (dealerTotal === 21) {
      rmessageSpan.innerText = `${playerTotal} to ${dealerTotal} Dealer Wins!`;
      console.log('Dealers Blackjack!');
    } if (playerTotal === 21) {
      messageSpan.innerText = `${playerTotal} to ${dealerTotal} Blackjack`;
      console.log('Blackjack! You Win!');
    } if (dealerTotal > 21 && playerTotal < 21) {
      messageSpan.innerText = `${playerTotal} to ${dealerTotal} You Win Dealer Busts!`;
      console.log('You Win Dealer Busts!!');
    } if (playerTotal < 21 && playerTotal > dealerTotal) {
      messageSpan.innerText = `${playerTotal} to ${dealerTotal} You Win!`
      console.log('You Win!')
    } if (playerTotal === dealerTotal) {
      messageSpan.innerText = `${playerTotal} to ${dealerTotal} Tie!`
      console.log('Tie!')
    }
  }



  function newGame() {
    document.getElementById("deal").disabled = false;
    var messageSpan = document.getElementById('messageSpan');
    dealer=[];
    player=[];
    dealerTotal = 0;
    playerTotals = 0;
    dealerBox.innerHTML= '';
    playerBox.innerHTML= '';
    messageSpan.innerText= `Lets Play!`
  }
