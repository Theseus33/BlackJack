
//Giving the cards a numerical value - face cards should be worth 10
// and ace would be worth either 1 or 11 depending on the current
//total value of the players hand

//constructor function to establish fundamentals of game including
//shuffling cards to randomize retults and return card by number and suit values
function blackJack() {
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
//the current total value of the players hand
