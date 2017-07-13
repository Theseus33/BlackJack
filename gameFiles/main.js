//constructor function to establish fundamentals of game including
//shuffling cards to randomize retults and return card by number and suit values
function BlackJack() {
this.suits =['diamonds', 'clubs', 'hearts', 'spades']
this.cards = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

this.randomize = function(){
  return Math.floor(Math.random()*52)
};

this.deal = function() {
  var cardSuit = this.randomize(blackJack.suits.length);
  var cardNumber = this.randomize(blackJack.numbers.length);
    return new Card(cardSuit, cardNumber);
  };

return blackJack;
}
//generating the cards and giving the cards a numerical value - face cards
//should be worth 10 and ace would be worth either 1 or 11 depending on
//the current total value of the players hand. Might have to deal with
//seperately during hand value calculation

function Card(number, suit) {
this.number = number;
this.suit = suit;
}

Card.prototype.cardShow = function() {
  return BlackJack.suits.[this.number];
}

Card.prototype.cardSuit = function() {
  return BlackJack.suits[this.suit];
}
//takes it by array number adding 1 to get card values for non face cards
//giving cards 10 and above the value of 10. Ace might be better handled
//while calculating hand worth.
Card.prototype.cardVal = function() {
  if(this.number ===0) {
    return 11;
  } else if(this.number > 1 && <10) {
    return(this.number++);
  } else {
    return 10;
  }
  };

//this part will deal with intial dealing of two cards as well as getting the
//value of the cards within the hand
function Hand() {
  this.cardOne = BlackJack.deal();
  this.cardTwo = BlackJack.deal();
};
//get the current value of the cards in hand
//making account of ace = both 1 and 11 dependant on hand total
Hand.prototype.worth = function() {
  var total = 0;
  var ace = false;
var current = this.currentCards;
for(i=0;i < current.length; i++) {
  total += card.value();
    }
    if (card.value() === 11) {
      aces += 1;
    }
    while (aces > 0 && sum > 21) {
      total -= 10;
      aces--;
    }
    return total;
  };



