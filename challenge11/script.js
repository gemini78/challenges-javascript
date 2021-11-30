"use strict";

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
 person1.calcBMI();
 person2.calcBMI();
  const person1HigherIMC = person1.bmi > person2.bmi;

  if (person1HigherIMC) {
    console.log(
      `${person1.username} a un IMC (${person1.bmi}) plus élevé que ${person2.username} (${person2.bmi})`
    );
  } else {
    console.log(
      `${person2.username} a un IMC (${person2.bmi}) plus élevé que ${person1.username} (${person1.bmi})`
    );
  }
  
  getCategory(person1.username, person1.bmi);

  getCategory(person2.username, person2.bmi);
};

// infos 1
let bernard = {
  username: "Bernard",
  taille: 1.69,
  poids: 78,
  bmi:-1,
  calcBMI() {
    this.bmi = this.poids / (this.taille * this.taille);
    return this.bmi;
  }
};

let marcel = {
  username: "Marcel",
  taille: 1.95,
  poids: 92,
  bmi:-1,
  calcBMI() {
    this.bmi = this.poids / (this.taille * this.taille);
    return this.bmi;
  }
};

calculAndCompareImc(bernard, marcel);

// infos 2
bernard.taille = 1.88;
bernard.poids = 95;
marcel.taille = 1.76;
marcel.poids = 85;

calculAndCompareImc(bernard, marcel);
