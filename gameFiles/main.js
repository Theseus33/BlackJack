//cards from Byron Knoll: http://code.google.com/p/vector-playing-cards/

var suits =['diamonds', 'clubs', 'hearts', 'spades'];
var cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var deck = [];
var player = [];
var dealer = [];
var players = [player, dealer];


function createDeck() {
  for(var i = 0; i<cards.length; i++){
    for(var j=0; j< suits.length; j++){
      var worth = parseInt(cards[i]);
      if(cards[i] ===0) {
        worth = 11;
      } else if(worth >1 && worth < 10) {
        worth = worth++;

       } else {
          worth =10;
          var card = {
            Card: cards[i],
            Suit: suits[j],
            cardImage = 'cards/' + cards[i] + '_of_' + suits[j] + '.png'};
          deck.push(card);
          console.log(card);
        }
    }
  }
}


function shuffle() {
Math.floor(Math.random()*deck.length);
}

function deal() {
  shuffle();
  for(p=0;p < 4;p++){
    var card = deck.pop();
    players[p].player.push(card);
    }
    createCard(card, p);
    cardImage
}

function playerScore() {
  var playerTotal =0;
  var ace = false;
  var currentPlayer = player;
    for(i=0; i<currentPlayer.length;i++) {
      playerTotal += worth;
    }
    if (worth===11) {
      aces += 1;
    }
    while (aces > 0 && total > 21) {
      playerTotal -= 10;
      aces--;
    }
    return playerTotal
 }

function dealerScore() {
  var dealerTotal =0;
  var ace = false;
  var currentDealer = dealer;
    for(i=0; i<currentDealer.length;i++) {
      dealerTotal += worth;
    }
    if (worth===11) {
      aces += 1;
    }
    while (aces > 0 && total > 21) {
      dealerTotal -= 10;
      aces--;
    }
    return dealerTotal
 }

 function hit(){
  var card = deck.pop();
  player.push(card);
  checkWin();
 }

function checkWin() {
  var total =0;
  var current;
}

var createBoard = function() {
  var cardElement = document.createElement('img');
  cardElement.setAttribute('src', cardImage);
  document.getElementById('playerBox').appendChild('cardElement')
}

createBoard();
