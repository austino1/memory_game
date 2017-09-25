var cards = [
{
	rank: "Queen",
	suit: "Hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "Queen",
	suit: "Diamonds",
	cardImage: "images/queen-of-diamonds",
},
{
	rank: "King",
	suit: "Hearts",
	cardImage: "images/king-of-hearts",
},
{
	rank: "King",
	suit: "Diamonds",
	cardImage: "images/king-of-diamonds",
}
];


var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("That was a match!");
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function() {
		var cardId = this.getAttribute('data-id');
		this.setAttribute('src', cards[cardId].cardImage);
		alert("You found a " + cards[cardId].rank + " of " + cards[cardId].suit + "!");
		console.log("User flipped "+ cards[cardId].rank);
		console.log(cards[cardId].cardImg);
		console.log(cards[cardId].suit);
		cardsInPlay.push(cards[cardId].rank);
		if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};

var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var newCardImg = document.createElement('img');
		newCardImg.setAttribute('data-id', i);
		newCardImg.addEventListener('click', flipCard);
		newCardImg.setAttribute('src', 'images/back.png');
		document.getElementById('game-board').appendChild(newCardImg);
	}
};

createBoard();




