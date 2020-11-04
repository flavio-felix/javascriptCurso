//par nome valor

const saudacao = 'Opa' //contexto lexico

function exec(){
    const saudacao = 'Falaaaa' //contexto lexico 2
    return saudacao
}

//objetos sao grupo aninhados de pares nome/valores
const cliente = {
    nome : 'Pedro',
    idade: 32,
    peso: 83,
    endereco: {
        logradouro: 'Rua Falacia',
        numero: 32
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)