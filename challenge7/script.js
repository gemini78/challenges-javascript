"use strict";

const bills = [125, 555, 44];
const calcTip = (note) => {
  const tip = note >= 50 && 350 <= note ? 0.15 : 0.2;
  return note * tip;
};

const tips = [];
bills.forEach((note) => {
  tips.push(calcTip(note));
});
// console.log(tips);

const totals = [];
for (let index = 0; index < bills.length; index++) {
  totals[index] = bills[index] + tips[index];
}
console.log("totals", totals);
