"use strict";

const notes = [275, 40, 430];
let percent;
let pourboire;
let valeurTotal;
const calculator = (notes) => {
  notes.forEach((note) => {
    percent = 50 <= note && note <= 300 ? 0.15 : 0.2;
    pourboire = note * percent;
    valeurTotal = note + pourboire;
    console.log(
      `La note était de ${note}, le pourboire de ${pourboire} et la valeur totale était de ${valeurTotal}`
    );
  });
};

calculator(notes);
