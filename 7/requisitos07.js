

function contarVogais(frase){

    let contador = 0

    for(let index = 0; index < frase.length; index++){
        let vogais = "aeiouáéíóúãâêîôû"
        const letra = frase[index].toLowerCase()
        if (
           vogais.includes(letra)
        ){
            contador++
        }
    }
    return contador
}

console.log(contarVogais("Olá, tudo bem?"))

