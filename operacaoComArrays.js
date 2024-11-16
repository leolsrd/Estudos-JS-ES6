// ! Operações com Array

// ? MAP = Percorrer todo o array

let lista = ["Matheus", "Maria", "José", "Joaquim"];

// lista.map((item, index) => {
//   console.log(`Passando: ${item} - está na posição ${index}`);
// });

// ? Reduce = Busca reduzir um array

let numeros = [5, 3, 2, 5];

// let total = numeros.reduce((acumulador, numero, indice, original) => {
//   console.log(`${acumulador} - total até o momento`);
//   console.log(`${numero} - valor atual`);
//   console.log(`${indice} - indice atual`);
//   console.log(`${original} - array origial`);
//   console.log("===================");

//   return (acumulador += numero);
// });

// console.log("Total do Reduce: " + total);

// ? FIND = buscar algo dentro do array

let listagem = [5, 3, "José", 2, "Ana"];

let busca = listagem.find((item) => {
  return item === "José";
});

// console.log(busca);

// ? FILTER

let palavras = ["Matheus", "Ana", "José", "Ricardo Silva", "Léo Lourenço"];

let resultado = palavras.filter((item) => {
  return item.length >= 5;
});

// console.log(resultado);

// ? Includes

let nomesLista = ["Matheus", "Ana", "Jussara", "Petrônio"];

// console.log(nomesLista.includes("Ana"));

// if (nomesLista.includes("Jussara")) {
//   console.log("Está na lista");
// } else {
//   console.log("Não está na lista");
// }

// ? startWith | endsWith

let nomeStarsWith = "Jussara";

// console.log(nomeStarsWith.startsWith("Jussa"));

nomesLista.map((value) => {
  let encontrou = value.startsWith("Jussa");
  console.log(`Nome a procurar: ${value} - nome checado ${encontrou}`);
});

let nomeEndsWith = "Ana Clara";

// console.log(nomeEndsWith.endsWith("ara"));
