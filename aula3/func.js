const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
  saldo: 200,
  payment: function (valor) {
    if (valor > this.saldo) {
      console.log("saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`pagamento efetuado, Novo saldo: ${this.saldo}`);
    }
  },
};

const cliente2 = Object.create(cliente);

cliente.payment(40);
console.log(cliente, cliente2);
