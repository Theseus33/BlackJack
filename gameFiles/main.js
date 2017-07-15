//cards from Byron Knoll: http://code.google.com/p/vector-playing-cards/
//spoke to Rajiste Bennin about some of the logistics as we were working
//on similar games. Raj suggested the fishcer yates shuffle. For some reason
//my initial shuffle function would keep adding to the deck or make doubles

var suits =['diamonds', 'clubs', 'hearts', 'spades'];
var cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var deck = [];
var player = [];
var dealer = [];
var players = [player, dealer];

//generates a deck of 52 cards from the suits and cards arrays above
function createDeck() {
  for(var i=0;i<cards.length;i++) {
    for(var j=0; j< suits.length; j++) {
        var worth = parseInt(cards[i]);
          if(cards[i] ===0) {
          worth = 11;
          }else if(worth > 1 && worth < 10){
          worth = worth++;
          } else {
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


