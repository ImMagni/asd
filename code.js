const shuffle = require('shuffle-array'); 
const fs = require("fs");

const laptops = 11;
const pcs = 17;

let laptopsG = []
let PcG = []

fs.readFile("nombres.txt", "utf8", (err, data) => {
  if (err) throw err;

  const studentsname = data.split(/\r?\n/);
  const students = studentsname.length
  const randomstudents = shuffle(Array.from({length: students}, (_, i) => i + 1));

  for (let i = 0; i < laptops; i++) {
    const St = studentsname[randomstudents.shift() - 1];
    laptopsG.push(St);
  }

  for (let i = 0; i < pcs; i++) {
    const St = studentsname[randomstudents.shift() - 1];
    const St2 = studentsname[randomstudents.shift() - 1];
    PcG.push([St, St2]);
  }

  let text = "Laptops:\n\n";

  for (let i = 0; i < laptopsG.length; i++) {
    text += "Laptop " + (i + 1) + ": ";
    text += laptopsG[i];
    text += '\n';
  }

  let text2 = "PCs:\n\n";
  for (let i = 0; i < PcG.length; i++) {
    text2 += "Pc " + (i + 1) + ": ";
    text2 += PcG[i].join(', ');
    text2 += '\n';
  }

  console.log(text + "\n" + text2)
});