//cards from Byron Knoll: http://code.google.com/p/vector-playing-cards/

//constructor function to establish fundamentals of game including
//shuffling cards to randomize retults and return card by number and suit values
function BlackJack() {
this.suits =['diamonds', 'clubs', 'hearts', 'spades']
this.cards = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
this.randomize = function(){
  return Math.floor(Math.random()*52)
};

this.deal = function() {
  var cardSuit = this.randomize(blackJack.suits.length);
  var cardNumber = this.randomize(blackJack.numbers.length);
    return new Card(cardSuit, cardNumber);
  };

return BlackJack;
}
//generating the cards and giving the cards a numerical value - face cards
//should be worth 10 and ace would be worth either 1 or 11 depending on
//the current total value of the players hand. Might have to deal with
//seperately during hand value calculation

function Card(number, suit) {
this.number = number;
this.suit = suit;
this.card = cardNumber + ' of ' + cardSuit + '.png';
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
  while (aces > 0 && total > 21) {
      total -= 10;
      aces--;
  }
  return total;
};

//Hit
Hand.prototype.hit = function() {
  var newCard = BlackJack.deal();
    this.currentCards.push(newCard);
    return newCard;
  };

  return Hand;
//==============================================================================
//Game dealer functionality and win/loss conditions for game (behavior?)
function Game() {
  this.player = new hand();
  this.dealer = new hand();
  this.final;
}


//WIN LOSS CONIDTIONS
/*  Game.prototype.status = function(stand) {
    if (this.player.score() < 21 && this.dealer.score() < 21 && !stand) {
      return this.final.update();
    } if (this.dealer.score() > 21 && this.player.score() > 21) {
      return this.final.loss('Dealer');
    } if (this.player.score() === 21) {
      return this.final.win('Blackjack');
    } if (this.dealer.score() > 21 && this.player.score() < 21) {
      return this.final.win();
    } if (this.player.score() < 21 && this.player.score() > this.dealer.score()) {
      return this.final.win();
    } if (this.player.score() === this.dealer.score()) {
      return this.final.tie();
    }
      return this.final.loss();
  }; */

//Dealer behavior hit till
Game.prototype.stand = function() {
    var dealerTotal = [];
    while (this.dealer.score() < 17) {
      dealerTotal.push(this.hitUser('Dealer'));
    }
    return results;
  };

return Game;

//Messages
function Final() {
$(#messageSpan).text(text.replace(message));
}

  Final.prototype.update = function() {
    return this.innerHTML().replaceWith(this.innerHTML());
  };

  Final.prototype.win = function(type) {
    var message;
    if (type === 'blackjack') {
      message = this.innerHTML('Blackjack! '+this.game.player.score()
      +'to' + this.game.dealer.score());
    } else {
      message = this.innerHTML('You win! ' + this.game.player.score()+'to'
      +this.game.dealer.score());
    }
    return this.innerHTML().replaceWith(message);
  };

  Final.prototype.loss = function() {
    var message = this.innerHTML('Sorry, you lose, '+this.game.player.score()
    +'to'+this.game.dealer.score());
    return this.innerHTML().replaceWith(message);
  };

  Final.prototype.tie = function() {
    var message = this.innerHTML('You tied! ' + this.game.player.score()
      +'to'+this.game.dealer.score());
    return this.innerHTML().replaceWith(message);
  };
  return Final

/*/add to this to initialize the game
    this.player = new Hand();
    this.dealer = new Hand();
    */
