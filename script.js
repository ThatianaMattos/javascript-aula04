//arrays ->  são listas ordenadas de elementos acessados por índice. Um array é uma estrutura de dados usada para armazenar vários valores em uma única variável. Pense nele como uma "caixa" que guarda uma lista de itens. -> Pode-se imaginar como uma lista, uma coleção de coisas.

//                      0           1           2       3

let alunosComCamera = ["Karina", "Gabriela", "Pedro", "Igor"];
//console.log(alunosComCamera);
//console.log(alunosComCamera[2]); // Mostrando um aluno específico
//alunosComCamera[2] = "Rafael";
//console.log(alunosComCamera);

//Métodos -> são instruções

// Para adicionar
// unshift -> Adiciona um elemento no início do array
alunosComCamera.unshift("Rafael");
//console.log(alunosComCamera);

// push -> Adiciona um novo elemento no final do array
alunosComCamera.push("Adevalter");
//console.log(alunosComCamera);

// Para remover
// shift
alunosComCamera.shift();
//console.log(alunosComCamera);

alunosComCamera.pop();
//console.log(alunosComCamera);

// Colocando o array em ordem
// sort
alunosComCamera.sort();
//console.log(alunosComCamera);

//let numeros = [5, 3, 8, 10, 20, 30, 6, 4, 9, 7, 1, 2]
//numeros.sort() -> // Não vai funcionar -> O método sort() do JavaScript, por padrão, converte todos os elementos do array para strings UTF-16 e realiza a ordenação usando ordenação lexicográfica baseada no valor dos códigos Unicode desses caracteres. Para funcionar neste caso,precisamos de uma função de comparação:

/* numeros.sort(function(a, b) {
    return b - a
}) */

//console.log(numeros);

// splice; -> remove, adiciona ou substitui um elemento específico do array, ele muda o array original

//array.splice(index, delete, elemento)

/* 
- O índice sempre começa no 0.

- Se o segundo parâmetro for 0, significa que não vai remover nada (apenas adicionar).

- Se não passar itens novos, o splice só remove.

- Ele muda o array original (não cria cópia). 
*/

// Adicionando um elemento
//alunosComCamera.splice(1, 0, "Rafael")
//console.log(alunosComCamera);

//Removendo um elemento
//alunosComCamera.splice(1, 1)
//console.log(alunosComCamera);

// Substituindo um elemento
//console.log(alunosComCamera);
//alunosComCamera.splice(0, 1, "Drissa");
//console.log(alunosComCamera);

//alunosComCamera.splice(3, 0, "Rafael", "Neusa")
//console.log(alunosComCamera);

//slice -> Ele retorna um novo array com os elementos que você escolheu.
//array.slice(início, fim);

// array.slice(inicio, fim)

// o elemento do início sempre será incluído;
// o elemento final não será incluído

//                  0       1           2             3        4        5
let produtos = ["Mouse", "teclado", "MacBook Pro", "Ipad", "Iphone", "Headset"];
//let meusProdutos =  produtos.slice(2, 5);
//console.log(meusProdutos);

const listaProdutos = document.querySelector("#listaProdutos");

for (let i = 0; i < produtos.length; i++) {
  const li = document.createElement("li");
  li.textContent = produtos[i];
  listaProdutos.appendChild(li);
}

let listaPares = document.querySelector("#listaPares");
let numeros = [2, 5, 8, 11, 14, 19, 22];

let i = 0;
while (i < numeros.length) {
  const li = document.createElement("li");
  li.textContent = numeros[i];

  if (numeros[i] % 2 === 0) {
    li.style.color = "green";
  } else {
    li.style.color = "darkred";
  }

  listaPares.appendChild(li);

  i++;
}
