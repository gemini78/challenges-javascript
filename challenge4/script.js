"use strict";

const matchs = [
  [
    { nameTeam: "Dauphins", scores: [1, 2, 3] },
    { nameTeam: "Koalas", scores: [88, 91, 110] },
  ],
  [
    { nameTeam: "Dauphins", scores: [97, 112, 101] },
    { nameTeam: "Koalas", scores: [109, 95, 123] },
  ],
  [
    { nameTeam: "Dauphins", scores: [97, 112, 101] },
    { nameTeam: "Koalas", scores: [109, 95, 106] },
  ],
];

const moyenne = (arrayScores) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sum = arrayScores.reduce(reducer);
  const result = sum / arrayScores.length;
  return parseFloat(result).toFixed(2);
};
const compareScores = (matchs) => {
  matchs.forEach((match) => {
    const team1 = match[0];
    const team2 = match[1];
    let gagnantRegle2 = "";
    let gagnantRegle3 = "";
    const moyenneTeam1 = moyenne(team1.scores);
    const moyenneTeam2 = moyenne(team2.scores);
    //console.log(moyenneTeam1, moyenneTeam2);

    console.log("---------- REGLE 2 -----------");
    if (moyenneTeam1 > moyenneTeam2) {
      gagnantRegle2 = team1.nameTeam;
    } else if (moyenneTeam2 > moyenneTeam1) {
      gagnantRegle2 = team2.nameTeam;
    } else {
      gagnantRegle2 = team1.nameTeam + " ET " + team2.nameTeam;
    }
    console.log(`Gagnant: ${gagnantRegle2}`);
    console.log("---------FIN REGLE 2 -----------");

    console.log("---------- REGLE 3 -----------");
    if (moyenneTeam1 >= 100 && moyenneTeam1 > moyenneTeam2) {
      gagnantRegle3 = `${team1.nameTeam} (${moyenneTeam1})`;
    } else if (moyenneTeam2 >= 100 && moyenneTeam2 > moyenneTeam1) {
      gagnantRegle3 = `${team2.nameTeam} (${moyenneTeam2})`;
    } else if (moyenneTeam1 >= 100 && moyenneTeam1 == moyenneTeam2) {
      gagnantRegle3 = `${team1.nameTeam} ET ${team2.nameTeam} (${moyenneTeam1})`;
    } else {
      gagnantRegle3 = "Pas de gagnant";
    }
    console.log(`Gagnant: ${gagnantRegle2}`);
    console.log("---------FIN REGLE 3 -----------");
  });
};

compareScores(matchs);
