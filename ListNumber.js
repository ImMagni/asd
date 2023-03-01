const shuffle = require('shuffle-array'); 

const laptops = 12;
const pcs = 25;
const students = 40;

const randomstudents = shuffle(Array.from({length: students}, (_, i) => i + 1));

let laptopsG = []
let PcG = []

for (let i = 0; i < laptops; i++) {
  const St = randomstudents.splice(0, 1);
  laptopsG.push(St);
}

for (let i = 0; i < pcs; i++) {
  const St = randomstudents.splice(0, 2);
  PcG.push(St);
}

let text = "Laptops:\n\n";

for (let i = 0; i < laptopsG.length; i++) {
  text += "Laptop " + (i + 1) + ": ";
  text += laptopsG[i].join(', ');
  text += '\n';
}

let text2 = "PCs:\n\n";
for (let i = 0; i < PcG.length; i++) {
  text2 += "Pc " + (i + 1) + ": ";
  text2 += PcG[i].join(', ');
  text2 += '\n';
}

console.log(text + "\n" + text2)
