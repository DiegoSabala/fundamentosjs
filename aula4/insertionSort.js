const livros = require("./lista-livros");

function insertionSort(list) {
  for (let i = 0; i < list.length; i++) {
    let analise = i;
    while (analise > 0 && list[analise].preco < list[analise - 1].preco) {
      let itemAnalise = list[analise];
      let itemAnterior = list[analise - 1];

      list[analise] = itemAnterior;
      list[analise - 1] = itemAnalise;

      analise--;
    }
  }
  console.log(list);
}

insertionSort(livros);
