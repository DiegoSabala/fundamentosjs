const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

/* --------- OU --------- */

const nomesAtt = [...new Set(nomes)];

console.log(nomesAtualizados);
console.log(nomesAtt);
