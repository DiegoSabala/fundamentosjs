export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }

  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }

  get nome() {
    return this.#nome;
  }
  get email() {
    return this.#email;
  }
  get nascimento() {
    return this.#nascimento;
  }

  get role() {
    return this.#role;
  }
  get ativo() {
    return this.#ativo;
  }

  set nome(novoNome) {
    if (novoNome === "") {
      throw new Error("formato não valido");
    }
    this.#nome = novoNome;
  }

  //funções
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`;
  }
}
