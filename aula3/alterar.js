const pessoa = {
  nome: "Luma",
  profissao: "Engenheira",
  idade: 32,
  telefone1: "11 322224444",
};

const deletData = (par) => {
  delete pessoa[par];
};

const addData = (par, val) => {
  pessoa[par] = val;
};

addData("telefone2", "11 233334444");

addData("telefones", [pessoa.telefone1, pessoa.telefone2]);

deletData("telefone1");
deletData("telefone2");

addData("enderecos", [
  {
    rua: "r. pererinha",
    bairro: "na galinha",
    cidade: "cachoeira do itapemirim",
    ap: true,
  },
]);

pessoa.enderecos.push({
  rua: "r. José Alo",
  bairro: "Huma",
  cidade: "Porto",
  ap: false,
});

const apartamentos = pessoa.enderecos.filter(
  (endereco) => endereco.ap === true
);

console.log(pessoa);
