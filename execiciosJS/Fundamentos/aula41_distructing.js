const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABCX',
        numero: 10
    }
}

const {nome, idade} = pessoa

console.log(nome, idade)

const { nome: n, idade: i} = pessoa
console.log( n, i)

const {sobrenome, bemhumradada = true} = pessoa

console.log(sobrenome, bemhumradada)