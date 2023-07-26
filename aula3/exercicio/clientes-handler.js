const clientes = require("./clientes.json");

function clientFinder(list, key, value) {
  return list.find((item) => item[key].includes(value));
}

function apFilterNoComp(clientes) {
  return clientes.filter((cliente) => {
    return (
      cliente.endereco.apartamento &&
      !cliente.endereco.hasOwnProperty("complemento")
    );
  });
}

function sorter(list, propertys) {
  const resultado = list.sort((a, b) => {
    if (a[propertys] > b[propertys]) {
      return 1;
    }
    if (a[propertys] < b[propertys]) {
      return -1;
    }
    return 0;
  });
  return resultado;
}

const ordenados = sorter(clientes, "nome");

const encontrados = clientFinder(clientes, "nome", "Kirby");

const filtrados = apFilterNoComp(clientes);

console.log(ordenados);
