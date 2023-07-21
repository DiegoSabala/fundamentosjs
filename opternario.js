const idadeMinima = 18;
const nome = "João";
const anoNasc = 2005;

const now = new Date();
console.log(now.getFullYear() - anoNasc);

const idadeCliente = (() => {
  return now.getFullYear() - anoNasc;
})();

/*
if (idadeCliente < idadeMinima) {
  console.log("Suco");
} else {
  console.log("Cerveja");
}
*/

console.log(Math.trunc(Math.random() * 10));

let opTernario = idadeCliente >= idadeMinima ? "cerveja" : "suco";

const pedido = `${nome} diz: "por favor, quero beber ${opTernario}"`;
console.log(pedido);
