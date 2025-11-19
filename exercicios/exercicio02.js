// Exercício 02 - Trabalhando com números

let numeros = [10, 5, 8, 21, 3, 14, 7]
console.log("Array inicial:", numeros)

// 1. Ordenar em ordem crescente
let crescente = [...numeros].sort((a, b) => a - b)
console.log("1) Ordem crescente:", crescente)

// 2. Ordenar em ordem decrescente
let decrescente = [...numeros].sort((a, b) => b - a)
console.log("2) Ordem decrescente:", decrescente)

// 3. Filtrar apenas números pares
let pares = numeros.filter(numero => numero % 2 === 0)
console.log("3) Apenas pares:", pares)

// 4. Criar um novo array com cada número ao quadrado
let quadrados = numeros.map(numero => numero * numero)
console.log("4) Números ao quadrado:", quadrados)

// 5. Somar todos os números do array
let somaTotal = numeros.reduce((acumulador, numero) => acumulador + numero, 0)
console.log("5) Soma total dos números:", somaTotal)
