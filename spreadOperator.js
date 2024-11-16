// ! Spread Operator

let pessoaLista = {
  nome: "Léo",
  sobrenome: "Lourenço",
  empresa: "Estudante",
  cargo: "Programador FullStack",
};

let primeiros = [1, 2, 3];

// * Sem o Spread Operator devolve um array e depois os números
let numerosSemSpreadOperator = [primeiros, 4, 5, 6];
// console.log(numerosSemSpreadOperator);

// * Com Spread Operator ... ele insere os números do primeiro array e
// * mescla com o segundo
let numerosComSpreadOperator = [...primeiros, 4, 5, 6];
// console.log(numerosComSpreadOperator);

let novaPessoa = {
  ...pessoaLista,
  status: "Ativo",
  cidade: "Olinda / PE",
};

// console.log(novaPessoa);

function bemVindo(...nomes) {
  console.log("Sejam bem vindos");
  console.log(nomes);
}

// bemVindo(["Léo", "Ana Clara", "Jussara", "Carlos", "Joana"]);
