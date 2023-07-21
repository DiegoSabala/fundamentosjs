const nomes = ["Ana", "Juliana", "Leonardo", "João", "Augusto"];
const idades = [30, 35, 28, 20, 40];
const faculdade = [false, true, true, true, false];

const funcionarios = [nomes, idades, faculdade];

// console.log(funcionarios[0][2], funcionarios[1][2], funcionarios[2][2]);

function collegeVerifier(college) {
  if (college) {
    return "possui ensino superior.";
  } else {
    return "não possui ensino superior.";
  }
}

function exibeFuncionario(funcionario) {
  if (funcionarios[0].includes(funcionario)) {
    const [nome, idades, faculdade] = funcionarios;

    const i = nome.indexOf(funcionario);
    console.log(
      `${funcionario} está cadastrado, tem ${
        idades[i]
      } anos e ${collegeVerifier(faculdade[i])}`
    );
  } else {
    console.log(`${funcionario} não encontrado`);
  }
}

exibeFuncionario("Juliana");
