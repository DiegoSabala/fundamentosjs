//JAVA SCRIPT
//JS
// Váriaveis

const firstNumber = 1;
const secNumber = 0.5;
const pi = Math.PI;

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
const sentence = "Meu nome é ";
const nome = "Diego";
const hiragana = "\u3041";

function concatenação() {
  let presentation = sentence + nome;
  return presentation;
}

function comparador() {
  if (0 == false && 1 == true && " " == false && null != false && " " != null) {
    return true;
  } else {
    return false;
  }
}

/*template String*/
const tiposDeDados = [
  `Number = ${operation()}`,
  `String = "${concatenação()}"`,
  `Boolean = ${firstNumber == secNumber} or ${operationResult == 1.5}`,
];

const funcList = [minusculizador(), comparador()](function message() {
  console.table(tiposDeDados);
  console.log(funcList);
})();

//NodeJS

//operadores = ["||", "&&"];
