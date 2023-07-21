const idadeMinima = 18;
const nome = "João";
const anoNasc = 2005;

console.log(`random number generator ${Math.trunc(Math.random() * 10)}`);

const now = new Date();
console.log(`idade de João ${now.getFullYear() - anoNasc}`);

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

let opTernario = idadeCliente >= idadeMinima ? "cerveja" : "suco";

const pedido = `${nome} diz: "por favor, quero beber ${opTernario}"`;
console.log(pedido);
