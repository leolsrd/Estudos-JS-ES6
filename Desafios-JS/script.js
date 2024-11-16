/**
 * * Crie uma lista de produtos
 * * 1.1 - A lista produtos deve conter os seguintes produtos: Computador,
 * *     Telefone, Mouse, Teclado Exiba essa lista no console quando abrir o
 * *     index.html.
 * * 1.2 - Mostre no console quantos produtos tem nessa lista.
 * * 1.3 - Retire o produto Mouse da lista e retorne no console a lista com os
 * *     produtos restantes.
 * * 1.4 - Faça uma busca na sua lista por algum produto, por exemplo procure
 * *     por Computador e caso exista esse produto na sua lista exiba um
 * *     console falando que este produto existe e mostre tambem o nome
 * *     deste produto caso não exista mostre uma mensagem avisão que o
 * *     produto não foi encontrado.
 * * 1.5 - Remova o segundo item da sua lista.
 */

// ? 1.1 - Criar lista d eprodutos
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(`Lista de produtos: ${produtos}`);

// ? 1.2 - Mostrar quantos itens tem na lista de produtos
console.log(`Quantidade de produtos na lista: ${produtos.length}`);

// ? 1.3 -  Retirando o Mouse da lista de produtosteste
console.log(
  "Removendo o Mouse da lista: " + produtos.filter((prod) => prod !== "Mouse")
);

// ?  1.4 - Buscando se a palavra existe e retornando se existe ou não
// * Preferi criar uma função para receber algo digitado no navegador para praticar
function procurarProduto(produtoPesquisar = "Mouse") {
  let produtoPesquisado = produtos.find((prod) => prod === produtoPesquisar);

  if (!produtoPesquisado) {
    console.log(`Produto ${produtoPesquisar} não existe na lista`);
  } else {
    console.log(`Produto ${produtoPesquisar} existe na lista`);
  }
}

// let produtoDigitado = prompt("Digite o que deseja pesquisar na lista");
// procurarProduto(produtoDigitado);
procurarProduto();

// ? 1.5 - Remova o segundo item da sua lista.
produtos.splice(1, 1);
console.log(`Produtos na lista: ${produtos}`);

// * 2.0 - Crie uma lista de apenas numeros 1,3,5,7,0,9
// * 2.1 - Ordene essa lista do menor para o maior.
// * 2.2 - Retire o primeiro numero desta lista.
// * 2.3 - Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9]
// *       para[9, 7, 5, 3, 1]

// ? 2.0 - Crie uma lista de apenas numeros 1,3,5,7,0,9
let numeros = [1, 3, 5, 7, 0, 9];

// ? 2.1 - Ordene essa lista do menor para o maior.
console.log("Ordena a lista em orderm crescente " + numeros.sort());

// ? 2.2 - Retire o primeiro numero desta lista.
console.log("Retirando o primeiro número da lista: " + numeros.shift());

// ? 2.3 - Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9]
// ? para[9, 7, 5, 3, 1]
console.log(`Invertendo a ordem da lista: ${numeros.reverse()}`);

// * 3.1 - Crie uma string que contenha o dia de hoje, exemplo:
// * let hoje = '20/07/2019';
// * 3.2 - Separe essa data em variaveis dia onde contenha apenas o dia, mes
// *       onde contenha apenas o mes, e ano onde contenha apenas o ano.

// ? 3.1 - Crie uma string que contenha o dia de hoje
let hoje = new Date();
console.log(`Dia de hoje: ${hoje}`);

// ? 3.2 - Separe essa data em variaveis dia onde contenha apenas o dia, mes
// ? onde contenha apenas o mes, e ano onde contenha apenas o ano.
let dia = hoje.getDate();
let mes = hoje.getMonth();
let ano = hoje.getFullYear();
console.log(`Data atual: ${dia}/${mes + 1}/${ano}`);
