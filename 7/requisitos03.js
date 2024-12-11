function compararValores(valor1, valor2){

    let booleano = Boolean(valor1 && valor2)

    return booleano
}

console.log(compararValores(5, "texto"))
console.log(compararValores(0, "texto"))
console.log(compararValores(0, false))