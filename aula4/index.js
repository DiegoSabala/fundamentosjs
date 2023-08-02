const livros = require("./lista-livros");

// const cheapest = (() => {
//   let maisBarato = 0;
//   for (let i = 0; i < livros.length; i++) {
//     if (livros[i].preco < livros[maisBarato].preco) {
//       maisBarato = i;
//     }
//   }
//   return maisBarato;
// })();

// const expensive = (() => {
//   let maisCaro = 0;
//   for (let i = 0; i < livros.length; i++) {
//     if (livros[i].preco > livros[maisCaro].preco) {
//       maisCaro = i;
//     }
//   }
//   return maisCaro;
// })();

const cost = (wanted) => {
  let maisBarato = 0;
  let maisCaro = 0;
  for (let i = 0; i < livros.length; i++) {
    if (livros[i].preco < livros[maisBarato].preco) {
      maisBarato = i;
    }
    if (livros[i].preco > livros[maisCaro].preco) {
      maisCaro = i;
    }
  }
  switch (wanted) {
    case "barato":
      return maisBarato;
    case "caro":
      return maisCaro;
    default:
      break;
  }
};

const sorter = (list, key) => list.sort((a, b) => (a[key] > b[key] ? 1 : -1));

const nomesLivros = sorter([...livros], "nome").map((obj) => obj.nome);
const livrosMaisBaratos = (quantidades) =>
  sorter([...livros], "preco")
    .map((obj) => obj.nome)
    .slice(0, quantidades);

console.log(livrosMaisBaratos(3));

const formatterString = (array) => {
  const lastElement = array.pop();
  return (formattedNomesLivros = array.join(", ") + " e " + lastElement);
};

console.log(
  `Os livros que temos são ${formatterString(
    nomesLivros
  )}. O livro mais barato é o ${livros[cost("barato")].nome}, custa ${
    livros[cost("barato")].preco
  } reais e o mais caro é o ${livros[cost("caro")].nome}, custa ${
    livros[cost("caro")].preco
  } reais. Os três livros mais baratos que temos são: ${formatterString(
    livrosMaisBaratos(3)
  )}`
);
