

function aplicarOperacao(x, operacao){
    return operacao(x)
}

function dobrar(numero){
    return numero * 2
}

const resultado = aplicarOperacao(5, dobrar)

console.log(resultado)


function criarIncrementador(incremento){
    return function(numero){
        return numero + incremento
    }
}

const incrementadoPor2 = criarIncrementador(2)
console.log(incrementadoPor2(5))