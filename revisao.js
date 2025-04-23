console.log("revisão JS")

// variáveis


const nome = "jean" //Local e não altera
var sobrenome = "Souza" // Escopo global e altera
let ultimoNome = "Pereira" // Escopo Global e antera
const idade = 25
 
const nomeCompletoComIdade = nome + " " + sobrenome + " " +ultimoNome + " " + idade
console.log(nomeCompletoComIdade)

// Template String

const texto = `Nome: ${nome}, Sobrenome: ${sobrenome}, Idade: ${idade < 50 ? idade : " "}`
console.log(texto)

//arrow function

const soma = (num1, num2) => { return num1 + num2}
console.log(soma(1, 2))


// desetruturação

const aluno = {
    nome_aluno: "jean",
    sobrenome_aluno: "Souza",
    idade_aluno: 25
}

const {nome_aluno,sobrenome_aluno, idade_aluno} = aluno
console.log(nome_aluno, idade_aluno)

console.log("\n")

// metodos do array

const numeros = [1, 2, 3, 4, 5]
console.log(numeros)

const numerosDobrados = numeros.map((num) => num * 2)
console.log(numerosDobrados)

const numerosPar = numeros.filter((numeros) => numeros % 2 == 0)
console.log(numerosPar)

const numerosImpares = numeros.filter((numeros) => numeros % 2 != 0)
console.log(numerosImpares)

const somaDoArray = numeros.reduce((anterior, atual) => anterior + atual, 0)
console.log(somaDoArray) 

console.log("\n")


const alunos = [
    { nome: "ana", nota: 8},
    { nome: "Bruno", nota: 5},
    { nome: "Carlos", nota: 7},
    { nome: "Daniela", nota: 4},
    { nome: "Jean", nota: 9},
    { nome: "Pedro", nota: 2},
    { nome: "Eduardo", nota: 6}
]

// Filtrar e mostrar os alunos que tenham nota >= 6

const nota = alunos.filter((nome) => (nome.nota) >= 6)
console.log(nota)