import fs from "fs";
import chalk from "chalk";

function extraiLinks(texto) {
  const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
  const capturas = [...texto.matchAll(regex)];
  const result = capturas.map((captura) => ({ [captura[1]]: captura[2] }));
  return result.length !== 0 ? result : chalk.red("não há links no arquivo");
}

function trataErro(erro) {
  throw new Error(chalk.bgRed(erro.code, "Deu Ruim"));
}

//async/await

async function pegaArquivo(caminhoDoArquivo) {
  try {
    const encoding = "utf-8";
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    return extraiLinks(texto);
  } catch (erro) {
    trataErro(erro);
  }
}

/** promises com then
   
   function pegaArquivo(caminhoDoArquivo) {
     const encoding = "utf-8";
     fs.promises
     .readFile(caminhoDoArquivo, encoding)
     .then((texto) => console.log(chalk.cyan(texto)))
     .catch(trataErro);
    }
    
    function pegaArquivo(caminhoDoArquivo) {
      const encoding = "utf-8";
      fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
          trataErro(erro);
        }
        console.log(chalk.cyan.bold(texto));
      });
  }
  */

export default pegaArquivo;
