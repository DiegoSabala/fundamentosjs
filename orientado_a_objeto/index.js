import User from "./User.js";
import Docente from "./docente.js";
import Admin from "./Admin.js";

const novoUser = new User("Mariana", "m@m", "2021-01-01");
console.log(novoUser.exibirInfos());

const novoAdmin = new Admin("Rodrigo", "r@r", "2002-07-09");
console.log(novoAdmin.exibirInfos());
novoAdmin.nome = "Renato";
console.log(novoAdmin.exibirInfos());

const novoDocente = new Docente("Guilherme", "g@g", "2001-05-06");
console.log(novoDocente.nome);
