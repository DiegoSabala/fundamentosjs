const { edFolha, edGalho } = require("./arrays");

function juntaLista(list1, list2) {
  let finalList = [];
  let positionList1 = 0;
  let positionList2 = 0;
  //let atual = 0;

  while (positionList1 < list1.length && positionList2 < list2.length) {
    let actualProduct1 = list1[positionList1];
    let actualProduct2 = list2[positionList2];

    if (actualProduct1.preco < actualProduct2.preco) {
      //finalList[atual] = actualProduct1;
      finalList.push(actualProduct1);
      positionList1++;
    } else {
      //finalList[atual] = actualProduct2;
      finalList.push(actualProduct2);
      positionList2++;
    }
    //atual++
  }
  while (positionList1 < list1.length) {
    finalList.push(list1[positionList1]);
    positionList1++;
  }
  while (positionList2 < list2.length) {
    finalList.push(list2[positionList2]);
    positionList2++;
  }

  return finalList;
}

console.log(juntaLista(edGalho, edFolha));
