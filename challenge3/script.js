"use strict";

// Calculate IMC of person
const getImc = (user) => {
  let imc = user.poids / (user.taille * user.taille);
  return imc.toFixed(1);
};

// Get category'person
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

// Calcul and compare imc between people
const calculAndCompareImc = (person1, person2) => {
  const imcPerson1 = getImc(person1);
  const imcPerson2 = getImc(person2);
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
};

// infos 1
let bernard = {
  username: "Bernard",
  taille: 1.69,
  poids: 78,
};
let marcel = {
  username: "Marcel",
  taille: 1.95,
  poids: 92,
};
calculAndCompareImc(bernard, marcel);

// infos 2
bernard.taille = 1.88;
bernard.poids = 95;
marcel.taille = 1.76;
marcel.poids = 85;
calculAndCompareImc(bernard, marcel);
