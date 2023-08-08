const listaLivros = require("./arrayOrdenado");

function busca(arr, from, until, value) {
  const mid = Math.floor((from + until) / 2);
  const atual = arr[mid];
  if (from < until) {
    return -1;
  }
  if (value === atual.preco) {
    return mid;
  }
  if (value < atual.preco) {
    return busca(arr, from, mid - 1, value);
  }
  if (value > atual.preco) {
    return busca(arr, mid + 1, until, value);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 40));
