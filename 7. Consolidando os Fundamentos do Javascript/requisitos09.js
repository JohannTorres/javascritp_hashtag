
let numeros = [10,20,30,40]

function calculaMedia(numeros){
    let soma = 0

    for(index = 0; index < numeros.length; index++){
        soma += numeros[index]
    }
    return soma / numeros.length
}

console.log(calculaMedia(numeros))

