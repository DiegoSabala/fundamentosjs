const listaLivros = require("./array");

function mergeSort(arr) {
  if (arr.length > 1) {
    const meio = Math.floor(arr.length / 2);
    const part1 = mergeSort(arr.slice(0, meio));
    const part2 = mergeSort(arr.slice(meio, arr.length));
    arr = ordena(part1, part2);
  }
  return arr;
}

function ordena(part1, part2) {
  let positionList1 = 0;
  let positionList2 = 0;
  const finalList = [];

  while (positionList1 < part1.length && positionList2 < part2.length) {
    let actualProduct1 = part1[positionList1];
    let actualProduct2 = part2[positionList2];

    if (actualProduct1.preco < actualProduct2.preco) {
      finalList.push(actualProduct1);
      positionList1++;
    } else {
      finalList.push(actualProduct2);
      positionList2++;
    }
  }
  return finalList.concat(
    positionList1 < part1.length
      ? part1.slice(positionList1)
      : part2.slice(positionList2)
  );
}

console.log(mergeSort(listaLivros));
