const alunos = ["Ana", "Marcus", "Maria", "Mauro"];
const notas = [3, 8.6, 9.8, 4.5];

const reprovados = alunos.filter((_, i) => {
  return notas[i] < 7;
});

// const reprovados = notas.map((nota) => {
//   if (nota < 6) {
//     return "reprovado";
//   } else {
//     return "aprovado";
//   }
// });

console.log(reprovados);
