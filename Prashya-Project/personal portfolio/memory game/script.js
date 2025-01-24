// script.js

const board = document.getElementById("game-board");
const message = document.getElementById("message");
let cards = [];
let flippedCards = [];
let matchedCards = 0;
let isGameActive = true;

const cardValues = ["A", "B", "C", "D", "E", "F", "G", "H", "A", "B", "C", "D", "E", "F", "G", "H"];

// Function to shuffle the cards
function shuffleArray(array) {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

// Function to create the cards
function createCards() {
    const shuffledValues = shuffleArray(cardValues);
    board.innerHTML = '';
    shuffledValues.forEach((value, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = value;
        card.addEventListener("click", flipCard);
        board.appendChild(card);
        cards.push(card);
    });
}

// Function to flip the card
function flipCard(event) {
    const clickedCard = event.target;

    if (!isGameActive || clickedCard.classList.contains("flipped") || flippedCards.length === 2) {
        return;
    }

    clickedCard.classList.add("flipped");
    clickedCard.textContent = clickedCard.dataset.value;
    flippedCards.push(clickedCard);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

// Function to check if two flipped cards match
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.value === card2.dataset.value) {
        matchedCards += 2;
        flippedCards = [];
        if (matchedCards === cards.length) {
            endGame("You Win!");
        }
    } else {
        setTimeout(() => {
            card1.classList.remove("flipped");
            card2.classList.remove("flipped");
            card1.textContent = "";
            card2.textContent = "";
            flippedCards = [];
        }, 1000);
    }
}

// Function to end the game
function endGame(result) {
    isGameActive = false;
    message.textContent = result;
}

// Function to restart the game
function restartGame() {
    flippedCards = [];
    matchedCards = 0;
    isGameActive = true;
    message.textContent = "";
    createCards();
}

// Initial call to create the cards
createCards();
