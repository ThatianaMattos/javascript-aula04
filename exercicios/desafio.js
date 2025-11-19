// Desafio - Lista de alunos

let alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carla", nota: 4 },
  { nome: "Daniel", nota: 8 },
  { nome: "Estela", nota: 5 }
]

console.log("Lista completa de alunos:", alunos)

// 1. Filtrar apenas alunos aprovados (nota maior ou igual a 6)
let aprovados = alunos.filter(aluno => aluno.nota >= 6)
console.log("1) Alunos aprovados:", aprovados)

// 2. Criar um array só com os nomes dos alunos
let nomes = alunos.map(aluno => aluno.nome)
console.log("2) Apenas nomes dos alunos:", nomes)

// 3. Ordenar alunos por nota em ordem decrescente
let ordenadosPorNota = [...alunos].sort((a, b) => b.nota - a.nota)
console.log("3) Alunos ordenados por nota (maior para menor):", ordenadosPorNota)

// 4. Verificar se existe algum aluno com nota menor que 5
let temNotaBaixa = alunos.some(aluno => aluno.nota < 5)
console.log("4) Existe aluno com nota menor que 5?", temNotaBaixa)

// 5. Calcular a média das notas da turma
let somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0)
let media = somaNotas / alunos.length
console.log("5) Média das notas da turma:", media)

