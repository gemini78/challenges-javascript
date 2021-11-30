"use strict";

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

console.log("Avec le 1er jeu de températures");
temperatures1.map((temperature, index)=>{
    console.log(`${temperature} degrés dans ${index + 1} jour`);
});

console.log("\n");
console.log("Avec le 2ème jeu de températures");
temperatures2.map((temperature, index)=>{
    console.log(`${temperature} degrés dans ${index + 1} jour`);
});
