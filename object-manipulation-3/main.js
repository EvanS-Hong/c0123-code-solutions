console.log('Lodash is loaded:', typeof _ !== 'undefined');

let players = {};
let deck = [];
let playerCount = 0;

function createPlayers (names) {
  const playerObject = {};
  for ( let i = 0; i < names.length; i++) {
    playerObject[i] = { name: names[i] };
    players = playerObject;

  }
  return players, playerCount = names.length;
}

function createDeck () {
  const newDeck = [];
  const suits = ['Spade', 'Club', 'Heart', 'Diamond'];
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King' , 'Ace'];
  for ( let i = 0; i < suits.length; i++) {
    for (let x = 0; x < ranks.length; x++) {
      const card = {};
      card.rank = ranks[x];
      card.suit = suits[i];
      newDeck.push(card);
    }
  }
  return deck = newDeck;
}

function playCards() {
  const oldCards = [];
  for (let i = 0; i < playerCount; i++) {
    let firstNum = Math.floor(Math.random() * 51);
    let secondNum = Math.floor(Math.random() * 51);
    while (oldCards.includes(firstNum) && oldCards.includes(secondNum)) {
      firstNum = Math.floor(Math.random() * 51);
      secondNum = Math.floor(Math.random() * 51);
    }
      players[i].hand = {1: deck[firstNum], 2: deck[secondNum]};
      oldCards.push(firstNum, secondNum);
  }
  return players;
}

function totalPoints() {
  for (let  i = 0; i < playerCount; i++) {
    let score = 0;
    for (let keys in players[i].hand) {
      if (typeof players[i].hand[keys].rank === "number") {
        score += players[i].hand[keys].rank
      } else if (typeof players[i].hand[keys].rank === "string" && players[i].hand[keys].rank === "Ace") {
        score += 11;
      } else {
        score += 10;
      }
    }
    players[i].totalScore = score;
  }
  return players;
}

function whoWon() {
  let winningScore = 0;
  let winner = '';
  for (let i = 0; i < playerCount; i++) {
    if (players[i].totalScore > winningScore) {
      winningScore = players[i].totalScore;
      winner = players[i].name;
    }
  }
  console.log(`The winner is ${winner} with a total score of ${winningScore}`);
}
