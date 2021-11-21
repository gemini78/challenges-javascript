"use strict";
const notes = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const calcTip = (note) => {
  const tip = note >= 50 && 350 <= note ? 0.15 : 0.2;
  return note * tip;
};

const calcAverage = (myArray) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const sum = myArray.reduce(reducer);
  const result = sum / myArray.length;
  return parseFloat(result).toFixed(2);
};

const tips = [];
const totals = [];

notes.forEach((note) => {
  let tip = calcTip(note);
  tips.push(tip);
  totals.push(note + tip);
});

console.log("tips", tips, "totals", totals);
console.log(
  `Average tips: ${calcAverage(tips)} ------  Average totals: ${calcAverage(
    totals
  )}`
);
