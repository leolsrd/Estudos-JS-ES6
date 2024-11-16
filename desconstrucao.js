// ! Descontruções de Objeto e Array

// ? Desconstruir um Objeto
let pessoa = {
  nome: "Léo",
  sobrenome: "Lourenço",
  empresa: "Estudante",
  cargo: "Programador FullStack",
};

// const { nome, cargo } = pessoa;

// console.log(nome);
// console.log(cargo);

// ? Descontruir um array
let nomes = ["Léo", "Ana Clara", "Fulano"];

// * Primeira opção de desconstrução
// let { 0: leo, 1: anaClara } = nomes;

// console.log(leo);
// console.log(anaClara);

// * Segunda opção de descontrução
let [primeiroNome, segundoNome] = nomes;

// console.log(`Primeiro nome: ${primeiroNome}`);
// console.log(`Segundo nome: ${segundoNome}`);
