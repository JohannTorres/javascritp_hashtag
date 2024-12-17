function ehPrimo(numero){

    if(numero <= 1){
        return false // numeros iguais ou maiores nao sao primos
    }

    for (let index = 2; index < numero; index++){
        if (numero % index === 0)//se for divisivel por index, nao é primo
            return false
        else{
            return true// noa encontrou nenhum divisor, é primo
        }
    }
}

console.log(ehPrimo(7))
console.log(ehPrimo(4))