const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "11122233300",
  email: "andre@email.com",
};
const nomeC = (() => cliente["nome"])();

console.log(nomeC);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email"];
chaves.forEach((chave) => {
  console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});
