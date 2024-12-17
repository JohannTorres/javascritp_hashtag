

function contarPalavras(frase){
    let contador = 0
    const palavras = frase.trim().split(" ") //garante que vai retirar espacos iniciais e finais da string

    for (let index = 0;  index < palavras.length; index++){
        if (palavras[index] !== ""){
            //ignorar palavras vazias
            contador++
        }
    }
    return contador
}

let frase = "o bitcoin é real"
console.log(contarPalavras(frase))








