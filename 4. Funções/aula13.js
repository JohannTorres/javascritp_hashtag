//celcius para farenheit

function celciusParaFarenheit(temperaturaFarenheit){
    const calculoConversao = (9/5) * (temperaturaFarenheit) + 32
    return calculoConversao
}

console.log(celciusParaFarenheit(35))



//calcula imposto

function calculaImposto(valorEtiqueta){
    const valorImposto = 1.08875 * valorEtiqueta 
    console.log(valorImposto)
}
calculaImposto(150)
