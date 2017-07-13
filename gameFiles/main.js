
//Giving the cards a numerical value - face cards should be worth 10
// and ace would be worth either 1 or 11 depending on the current
//total value of the players hand

function makeDeck() {
var suits =['diamonds', 'clubs', 'hearts', 'spades']
var cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
  var deck =[];
  //use i by default fo for populating the hand with cards
  for(var i= 0; i < cards.length; i++) {
  //useing s to signify suits
        for(var s = 0; s < 4; s++) {
  //to get the value of the card
            for(var val = 0; val < 13; val++) {
                var cardValue = val++;
                if(cardValue >= 11 && cardValue <=13) {
                    cardValue = 10;
                } else if (cardValue === 1) {
                    cardValue = 11;
                }
                deck.push({'val': cardValue, 'name': cardNames[val], 'suit': suit + 1});
            }
        }
    }
};








===============================================================================
/*
// Our deal function will return a random card
var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};

// Deal out our first hand
var card1 = deal();
var card2 = deal();

// This function takes a card as a parameter and returns the value
// of that card
var getValue = function(card) {
  // if its a face card, number should be set to 10
  if (card%13 > 10) {
        return  10;
    }
  // What if it's an ace?
    else if (card % 13 === 1){
        return 11;
  // Otherwise, we just want its number value
}
else {
    return card %13;
}
}
// Score the hand
function score() {
  return getValue(card1) + getValue(card2);
}

console.log("You have cards " + card1 + " and " + card2 +
        " for a score of " + score(card1, card2));
        */
