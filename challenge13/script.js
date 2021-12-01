"use strict";
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//Créer un tableau de joueurs pour chaque équipe (variables ‘players1’ et ‘players2’).
const players1 = [...game.players[0]];
const players2 = [...game.players[1]];

//le premier joueur dans un tableau de joueurs est le gardien et les autres sont des joueurs de terrain. Pour l’équipe 1 (le Bayern de Munich), créer une variable ‘gk’ avec le nom du gardien et un tableau ‘fieldPlayers’ avec le reste des joueurs de l’équipe.

const gk = players1[0];
const fieldPlayers = [...players1];
fieldPlayers.shift();

//Créer un tableau ‘allPlayers’ qui contient les joueurs de chaque équipe (22 joueurs).
const allPlayers = players1.concat(players2);

//Pendant le match, le Bayern utilise 3 joueurs remplaçants. Créer un autre tableau ‘players1Final’ contenant tous les joueurs de l’équipe originelle ainsi que ‘Thiago’ ‘Coutinho’ et ‘Perisic’.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

//Basé sur l’objet game.odds, créer une variable pour chaque probabilité (appelés ‘team1’, ‘draw’ et ‘team2’).
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

//Écrire une fonction ‘printGoals’ qui prends un nombre arbitraire de joueurs et qui écrit chacun d’eux dans la console , ainsi que le nombre total de buts.

//returns a random number included in the array. if start is omitted then the number 0 can be returned
const randomNumberInArray = (array, start = 0) => {
  return Math.floor(Math.random() * array.length + start);
};

//returns an array of players of random length
const getRandomPlayer = (team, desiredNumber = players1.length) => {
  const arr = [];
  let nbr = -1;
  let cpt = 0;
  while (cpt != desiredNumber) {
    nbr = randomNumberInArray(team);
    if (!arr.includes(nbr)) {
      arr.push(nbr);
      cpt++;
    }
  }
  return arr;
};

// returns the number of goals of a player
const numberGoalForOnePlayer = (scoredPlayer, namePlayer) => {
  let nbrGoal = 0;
  scoredPlayer.map((player) => {
    if (player == namePlayer) {
      nbrGoal++;
    }
  });
  return nbrGoal;
};

//written for the name of the player as well as his number of goals, and the total of goals.
const printGoals = (keysArrayPlayers) => {
  let nbrGoalFor1player = 0;
  let totalGoals = 0;

  keysArrayPlayers.map((key) => {
    nbrGoalFor1player = numberGoalForOnePlayer(game.scored, players1[key]);
    totalGoals += nbrGoalFor1player;

    console.log(`${players1[key]} : ${nbrGoalFor1player} goal(s)`);
  });

  console.log(`Total : ${totalGoals}`);
};

const numberRandomPlayer1 = randomNumberInArray(players1);
printGoals(getRandomPlayer(players1, numberRandomPlayer1));

//L’équipe avec la probabilité la plus basse est celle la plus susceptible de gagner. Écrire dans la console quelle équipe a le plus de chance de gagner.

// return the team has the most chance of winning.
const hasBestLuckingOfwinning = (team1, equal, team2) => {
  let array = [];
  array.push(team1, equal, team2);
  array.sort();
  if (array[0] == equal) {
    console.log(`Le match null a plus de probabilité`);
  } else {
    if (array[0] == team1) {
      console.log(`${game.team1} a plus de chance de gagner`);
    } else {
      console.log(`${game.team2} a plus de chance de gagner`);
    }
  }
};
hasBestLuckingOfwinning(team1, draw, team2);

// Exercice2
// Faire une boucle sur le tableau game.scored et afficher dans la console chaque nom de butteur ainsi que le numéro du but : (Exemple : “But 1 : Lewanoski”).
const showGoalsPlayer = (scoredArray) => {
  scoredArray.map((score, index) => {
    console.log(`But ${index + 1} : ${score}`);
  });
};

showGoalsPlayer(game.scored);

// Faire une boucle qui calcule la moyenne des probabilités et l’écrire dans la console.

const average = (team1, equal, team2) => {
  return ((team1 + equal + team2) / 3).toFixed(2);
};
console.log(`La moyenne est de ${average(team1, draw, team2)}`);

// Afficher les probabilités dans la console, mais dans un joli format

const showProbability = (odds) => {
  console.log(`Probabilité de victoire pour ${game.team1} : ${odds.team1}`);
  console.log(`Probabilité de match null : ${odds.x}`);
  console.log(`Probabilité de victoire pour ${game.team2} : ${odds.team2}`);
};

showProbability(game.odds);

// Créer un objet appelé ‘scorers’ qui contient le nom des joueurs qui ont marqué en propriété et le nombre de buts qu’ils ont marqué en value

const getScorer = (scrored) => {
  const scorers = {};
  scrored.map((namePlayer) => {
    if (scorers[namePlayer]) {
      scorers[namePlayer]++;
    } else {
      scorers[namePlayer] = 1;
    }
  });
  return scorers;
};

console.log(getScorer(game.scored));

// Exercice 3
const gameEvents = [
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
];
//Créer un tableau ‘events’ des différents évènements qui se sont déroulés (pas de doublon !).

const getEvents = (arrayEvents) => {
  const events = [];
  const arrayTemp = [];
  arrayEvents.map((event) => {
    if (!arrayTemp.includes(event[1])) {
      events.push(event);
      arrayTemp.push(event[1]);
    }
  });
  return events;
};

const events = getEvents(gameEvents);
console.log(events);

//Après que le jeux soit fini, on a décidé que le carton jaune de la minute 64 n’était pas juste, Le supprimer du log d’évènements.

// delete event at X minutes
const deleteEvent = (minutes, arrayEvents) => {
  let indexToDelete = -1;
  arrayEvents.map((event, index) => {
    if (event[0] == minutes) {
      indexToDelete = index;
    }
  });
  if (indexToDelete != -1) {
    arrayEvents.splice(indexToDelete, 1);
  }
  return arrayEvents;
};

console.log(deleteEvent(64, gameEvents));

// Calculer et afficher ce texte dans la console : “Un évènement est apparu en moyenne toutes les 9 minutes”. (Un jeu de foot dure 90 minutes).

// show average minute'event
const eventAppearsXminute = (eventsArrayGlobal) => {
  const xMinute = 90 / eventsArrayGlobal.length;
  console.log(
    `Un évènement est apparu en moyenne toutes les ${xMinute} minutes`
  );
};

eventAppearsXminute(gameEvents);

//Faire une boucle sur ‘gameEvents’ et afficher pour chaque élément dans la console s’il s’est déroulé dans la première ou deuxième moitié du jeu

const showPartEvents = (eventsArrayGlobal) => {
  eventsArrayGlobal.map((event) => {
    if (event[0] < 45) {
      console.log(`[PREMIÈRE MOITIÉ] ${event[0]} . ${event[1]}`);
    } else {
      console.log(`[DEUXIEME MOITIÉ] ${event[0]} . ${event[1]}`);
    }
  });
};

showPartEvents(gameEvents);
