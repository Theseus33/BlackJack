# BlackJack
http://police-budget-28607.bitballoon.com/

<img width="800" alt="screen" src="https://git.generalassemb.ly/storage/user/7100/files/86d95c40-6acd-11e7-9f3d-7b174d66f0bc">


## What is BlackJack?

From the dawn of time man has attempted to count to 21.
With inventions slowly progressing towards that achievemnent,
first fire, then the wheel, then blackjack. Little known fact
that cavemen used to gamble with shells.

Blackjack, also known as twenty-one, is the most widely played casino banking game in the world.[1] Blackjack is a comparing card game between a player and dealer, meaning players compete against the dealer but not against other players. It is played with one or more decks of 52 cards. The objective of the game is to beat the dealer in one of the following ways:

Get 21 points on the player's first two cards (called a "blackjack" or "natural"), without a dealer blackjack;
Reach a final score higher than the dealer without exceeding 21; or
Let the dealer draw additional cards until their hand exceeds 21.
-wikipedia

## Technical Discussion

List of the technologies you're using (HTML, CSS, JavaScript)
HTML 
CSS
JAVASCRIPT

## Code samples, description of challenges you overcame, etc.
```
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
```
## Any credits or notes you feel you should add
Credit to Raj Bennin for help with the logic. Stack overflow for so many things.
Need to fix the scoring and I would have liked to add betting to it but got stuck 
on the scoring logic.

## If you had more time to work on your game, what would you do?
add animation to the cards
fix scoring with the ace 
add betting and a load in screen.
