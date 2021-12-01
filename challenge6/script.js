"use strict";

const matchs = [
  [
    { nameTeam: "Dauphins", scores: [44, 23, 71] },
    { nameTeam: "Koalas", scores: [65, 54, 49] },
  ],
  [
    { nameTeam: "Dauphins", scores: [85, 54, 41] },
    { nameTeam: "Koalas", scores: [23, 34, 27] },
  ],
];

const calcAverage = (arrayScores) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sum = arrayScores.reduce(reducer);
  const result = sum / arrayScores.length;
  return result.toFixed(2);
};

const checkWinner = (match) => {
  const team1 = match[0];
  const team2 = match[1];
  const average1 = calcAverage(team1.scores);
  const average2 = calcAverage(team2.scores);
  if (average1 > average2) {
    console.log(`L’équipe ${team1.nameTeam} gagne (${average1} vs ${average2})`);
  } else if (average2 > average1) {
    console.log(`L’équipe ${team2.nameTeam} gagne (${average2} vs ${average1})`);
  } else {
    console.log(
      `${team1.nameTeam}/${team2.nameTeam} Egalité (${average1} vs ${average2})`
    );
  }
};

matchs.forEach((match) => {
  checkWinner(match);
});
