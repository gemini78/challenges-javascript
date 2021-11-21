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
  return parseFloat(result).toFixed(2);
};

const checkWinner = (average1, average2, nameTeam1, nameTeam2) => {
  if (average1 > average2) {
    console.log(`L’équipe ${nameTeam1} gagne (${average1} vs ${average2})`);
  } else if (average2 > average1) {
    console.log(`L’équipe ${nameTeam2} gagne (${average2} vs ${average1})`);
  } else {
    console.log(
      `${nameTeam1}/${nameTeam2} Egalité (${average2} vs ${average1})`
    );
  }
};

matchs.forEach((match) => {
  let average1 = calcAverage(match[0].scores);
  let average2 = calcAverage(match[1].scores);
  checkWinner(average1, average2, match[0]["nameTeam"], match[1]["nameTeam"]);
});
