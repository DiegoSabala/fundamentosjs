//JAVA SCRIPT
//JS
// Váriaveis

const firstNumber = 1;
const secNumber = 0.5;
const pi = Math.PI;

const sentence = "Meu nome é ";
const nome = "Diego";
const hiragana = "\u3041";

//funções
function operation() {
  let mathOp = firstNumber + secNumber;
  return mathOp;
}
const operationResult = operation();

function minusculizador() {
  const tiposDeDadosString = tiposDeDados.toString();
  const tiposDeDadosMinusculo = tiposDeDadosString.toLocaleLowerCase();
  console.log("quantidade de caracteres =", tiposDeDadosMinusculo.length);
  return tiposDeDadosMinusculo;
}

function concatenação() {
  let presentation = sentence + nome;
  return presentation;
}

const tiposDeDados = [
  /*template String*/ `Number = ${operationResult}`,
  `String = "${concatenação()}"`,
  `Boolean = ${firstNumber == secNumber} or ${operationResult == 1.5}`,
];

console.log(tiposDeDados, minusculizador());
//NodeJS

operadores = ["||", "&&"];
