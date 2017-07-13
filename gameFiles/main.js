
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
                } else if (cardValue === 1 ) {
                    cardValue = 11;
                }
  //this should push the value of the card the suit and number/face worth
                deck.push({'val': cards[i], 'name': cards[val], 'suit': suits[s]});
            }
        }
    }
};

function randomizeDeck() {
Math.floor.Math.random*52

}

//debating whether or not to add a betting aspect at this time but win/lose
//will have to do for now

//deals two cards to player and 2 to the dealer
var dealer = [];
var player = [];

function deal(){

        for(var i = 0; i < 2; i++){
                var card = deck.pop();
                player[i].push(card);
                deealer[i].push(card);
                dealCard(card, i);

            }
        };




