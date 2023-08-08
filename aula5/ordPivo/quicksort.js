const listaLivros = require("./array");
const trocaLugar = require("./index");

function quickSort(arr, left, right) {
  if (arr.length > 1) {
    let actualIndex = particiona(arr, left, right);
    if (left < actualIndex - 1) {
      quickSort(arr, left, actualIndex - 1);
    }
    if (actualIndex < right) {
      quickSort(arr, actualIndex, right);
    }
  }
  return arr;
}

function particiona(arr, left, right) {
  let pivot = arr[Math.floor((left + right) / 2)];
  let actualLeft = left;
  let actualRight = right;

  while (actualLeft <= actualRight) {
    while (arr[actualLeft].preco < pivot.preco) {
      actualLeft++;
    }
    while (arr[actualRight].preco > pivot.preco) {
      actualRight--;
    }
    if (actualLeft <= actualRight) {
      trocaLugar(arr, actualLeft, actualRight);
      actualLeft++;
      actualRight--;
    }
  }
  return actualLeft;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
