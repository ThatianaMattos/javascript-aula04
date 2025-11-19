// Exercício 01 - Lista de Tarefas

let tarefas = ["Estudar JavaScript", "Ler um livro", "Fazer exercícios"]
console.log("Lista inicial:", tarefas)

// 1. Adicione a tarefa "Arrumar o quarto" ao final da lista.
tarefas.push("Arrumar o quarto")
console.log("1) Após adicionar no final:", tarefas)

// 2. Adicione a tarefa "Tomar café da manhã" ao início da lista.
tarefas.unshift("Tomar café da manhã")
console.log("2) Após adicionar no início:", tarefas)

// 3. Remova a última tarefa da lista.
tarefas.pop()
console.log("3) Após remover a última:", tarefas)

// 4. Remova a primeira tarefa da lista.
tarefas.shift()
console.log("4) Após remover a primeira:", tarefas)

// 5. Substitua a tarefa "Fazer exercícios" por "Fazer caminhada".
let index = tarefas.indexOf("Fazer exercícios")
if (index !== -1) {
  tarefas.splice(index, 1, "Fazer caminhada")
}
console.log("5) Após substituir:", tarefas)

// 6. Ordene as tarefas em ordem alfabética.
tarefas.sort()
console.log("6) Após ordenar:", tarefas)

// 7. Inverta a ordem da lista atual.
tarefas.reverse()
console.log("7) Após inverter:", tarefas)

// 8. Nova lista com as duas primeiras tarefas (sem alterar a original).
let primeiras = tarefas.slice(0, 2)
console.log("8) Duas primeiras tarefas:", primeiras)
