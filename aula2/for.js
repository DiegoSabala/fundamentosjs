/* ---------------- FOR --------------- */

const numbers = [10, 20, 30, 40, 50, 60];
for (let i = 0; i < numbers.length; i++) {
  console.log(` o numero é ${numbers[i]}`);
}

const notas = [10, 6.5, 8, 7.5];

const media = () => {
  let somaDasNotas = 0;
  for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
  }
  return somaDasNotas / notas.length;
};

/* --------------- FOR OF -------------- */

const notasForOf = [10, 9, 8, 9];

const mediaForOf = () => {
  let somaDasNotas = 0;
  for (let nota of notasForOf) {
    somaDasNotas += nota;
  }
  return somaDasNotas / notasForOf.length;
};

console.log(
  `a media das notas é ${media()}`,
  `a media das notas é ${mediaForOf()}`
);
