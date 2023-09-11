function extraiLinks(arrLinks) {
  return arrLinks.map((objetoLink) => Object.values(objetoLink));
}

async function checaStatus(listaURLs) {
  const arrStatus = await Promise.all(
    listaURLs.map(async (url) => {
      try {
        const response = await fetch(url);
        return response.status;
      } catch (erro) {
        return manejaErros(erro);
      }
    })
  );
  return arrStatus;
}

function manejaErros(erro) {
  console.log(chalk.red("algo deu errado!"), erro);
}

export default async function listaValidada(listaDeLinks) {
  const links = extraiLinks(listaDeLinks);
  const status = await checaStatus(links);
  return listaDeLinks.map((objeto, indice) => ({
    ...objeto,
    status: status[indice],
  }));
}

//[gatinho salsicha](http://gatinhosalsicha.com.br/)

/*
const res = await fetch('https://nodejs.org/api/documentation.json');
if (res.ok) {
  const data = await res.json();
  console.log(data);
}
*/
