//cards from Byron Knoll: http://code.google.com/p/vector-playing-cards/
//got some ideas from http://www.thatsoftwaredude.com/content/6417/how-to-code-blackjack-using-javascript
//on how to approach the game and MDN and W3schools for syntax and general help
//spoke to Rajiste Bennin about some of the logistics as we were working
//on similar games. Raj suggested the fishcer yates shuffle. For some reason
//my initial shuffle function would keep adding to the deck or make doubles

var suits =['diamonds', 'clubs', 'hearts', 'spades'];
var cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
var deck = [];
var player = [];
var dealer = [];
var playerBox = document.getElementById('playerBox');
var dealerBox = document.getElementById('dealerBox');
var newCard = document.createElement('img');

//generates a deck of 52 cards from the suits and cards arrays above
function createDeck() {
  for(var i=0;i<cards.length;i++) {
    for(var j=0; j< suits.length; j++) {
        var worth = parseInt(cards[i]);
          if(worth ===1) {
           worth =11;
          } else if (worth > 1 && worth < 10){
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

//had deal as one big function got suggestion to seperate it
function dealPlayer() {
  if (deck.length > 0) {
    let card = deck.shift();
    let img = document.createElement('img');
    img.src = card.Image;
    playerBox.append(img);
    player.push(card);
  }
}

function dealDealer() {
  if (deck.length > 0) {
    let card = deck.shift();
    let img = document.createElement('img');
    img.src = card.Image;
    dealerBox.append(img);
    dealer.push(card);
  }
}

function dealerScore() {
var dealerTotal =0;
  for(d= 0; d< dealer.length; d++){
  dealerTotal += dealer[d].Worth;
  }
  console.log(dealerTotal);
}

function playerScore() {
var playerTotal =0;
  for(p= 0; p< player.length; p++){
  playerTotal += player[p].Worth;
  }
  console.log(playerTotal);
}

function deal(){
document.getElementById("deal").onclick = function() {
  this.disabled = true;
  this.style.visibility = "hidden";
  }
  createDeck();
  shuffle(deck)
  dealPlayer();
  dealDealer();
  dealPlayer();
  dealDealer();
}


 function hit(){
  if(player.length < 5){
  dealPlayer();
  } else {
    document.getElementById("hit").onclick = function() {
    this.disabled = true;
    this.style.visibility = "hidden";
    }

  }
 }

function hitDealer(){
  if(player.length < 5){
  dealDealer();


  }
}

function stand() {
  console.log(dealerTotal)
}
