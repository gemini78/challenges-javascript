"use strict";

const bills = [125, 555, 44];

const calcTip = (note) => {
  const tip = note >= 50 && 350 <= note ? 0.15 : 0.2;
  return note * tip;
};

const tips = [];

bills.map(note=>{
  tips.push(calcTip(note));
});

//console.log(tips);

const totals = [];

bills.map((bill, index) => {
  totals[index] = bill + tips[index];
}); 

console.log("totals", totals);
