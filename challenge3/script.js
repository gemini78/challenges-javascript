"use strict";

const datas = [
  [
    ["bernard", 1.69, 78],
    ["marcel", 1.95, 92],
  ],
  [
    ["bernard", 1.88, 95],
    ["marcel", 1.76, 85],
  ],
];

let bernard = {};
let marcel = {};

const imc = (user) => {
  let imc = user.poids / (user.taille * user.taille);
  return parseFloat(imc).toFixed(1);
};

const calculAndCompareImc = (datas, person1, person2) => {
  const getCategory = (firstname, imc) => {
    let category = "";
    if (imc < 22) {
      category = "Insuffisance pondérale";
    } else if (imc > 22 && imc <= 27) {
      category = "Poids normal";
    } else if (imc > 27 && imc <= 32) {
      category = "Surpoids";
    } else if (imc > 32 && imc <= 42) {
      category = "Obésité";
    } else if (imc > 42) {
      category = "Obésité importante";
    }
    console.log(`${firstname}: ${category}`);
  };

  datas.forEach((tuple) => {
    person1.username = tuple[0][0];
    person1.taille = tuple[0][1];
    person1.poids = tuple[0][2];

    person2.username = tuple[1][0];
    person2.taille = tuple[1][1];
    person2.poids = tuple[1][2];

    const imcPerson1 = imc(person1);
    const imcPerson2 = imc(person2);
    const person1HigherIMC = imcPerson1 > imcPerson2;

    if (person1HigherIMC) {
      console.log(
        `${person1.username} a un IMC (${imcPerson1}) plus élevé que ${person2.username} (${imcPerson2})`
      );
    } else {
      console.log(
        `${person2.username} a un IMC (${imcPerson2}) plus élevé que ${person1.username} (${imcPerson1})`
      );
    }

    getCategory(person1.username, imcPerson1);
    getCategory(person2.username, imcPerson2);
  });
};

calculAndCompareImc(datas, bernard, marcel);
