const notas = [7, 7, 8, 9];

const novasNotas = [5, ...notas, 8];

novasNotas.push(10);

console.log(`as novas notas são ${novasNotas}`);
console.log(`as notas originais são ${notas}`);
