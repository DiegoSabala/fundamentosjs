const listaLivros = require("./array");

function encontroMenores(pivot, arr) {
  let menores = 0;
  for (let i = 0; i < arr.length; i++) {
    let produtoAtual = arr[i];
    if (produtoAtual.preco < pivot.preco) {
      menores++;
    }
  }
  trocaLugar(arr, arr.indexOf(pivot), menores);
  return arr;
}

function trocaLugar(arr, from, to) {
  const elem1 = arr[from];
  const elem2 = arr[to];

  arr[to] = elem1;
  arr[from] = elem2;
}

function divideNoPivot(arr) {
  let pivot = arr[Math.floor(arr.length / 2)];
  encontroMenores(pivot, arr);
  let valoresMenores = 0;
  for (let i = 0; i < arr.length; i++) {
    let atual = arr[i];
    if (atual.preco <= pivot.preco && atual !== pivot) {
      trocaLugar(arr, i, valoresMenores);
      valoresMenores++;
    }
  }
  return arr;
}

console.log(divideNoPivot(listaLivros));

module.exports = trocaLugar;
