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

Card.prototype.cardVal = function() {
  if(this.number ===0) {
    return 11;
  } else if(this.number > 1 && <10) {
    return(this.number++);
  } else {
    return 10;
  }
  };



