const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

for (let key in cliente) {
  let tipo = typeof cliente[key];
  if (tipo === "string" || tipo === "boolean" || tipo === "number") {
    console.log(`A chave ${key} tem o valor ${cliente[key]}`);
  }
}

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro! É necessário ter um endereço cadastrado");
}
