const nomes = ["Evaldo", "Mari", "Camis"];

function imprimeNome(nome) {
  console.log(nome);
}

nomes.forEach(imprimeNome);

/* ---- OU ---- */

nomes.forEach(function (nome) {
  console.log(nome);
});

/* ---- OU ---- */

nomes.forEach((nome) => {
  console.log(nome);
});
