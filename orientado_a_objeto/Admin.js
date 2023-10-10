import User from "./User.js";

export default class Admin extends User {
  constructor(nome, email, nascimento, role = "Admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  exibirInfos() {
    return `${this.nome}, ${this.role}`;
  }

  criarCurso(nomeDoCurso, vagas) {
    return ` curso de ${nomeDoCurso} criado com ${vagas}`;
  }
}
