

const fraseCodificar = "a casa e o sol um dia lindo"

const resultado = codificar(fraseCodificar)

const fraseDecodificar = "1 c1s2 2 4 s41"

const resultado2 = decodificar(fraseDecodificar)

function codificar(frase){
    let resultado = frase

    while (resultado.includes("a")){
        resultado = resultado.replace("a", "1")
    }

    while (resultado.includes("e")){
        resultado = resultado.replace("e", "2")
    }

    while (resultado.includes("i")){
        resultado = resultado.replace("i", "3")
    }

    while (resultado.includes("o")){
        resultado = resultado.replace("o", "4")
    }

    while (resultado.includes("u")){
        resultado = resultado.replace("u", "5")
    }

    return resultado
}

function decodificar(frase){
    let resultado = frase

    while (resultado.includes("1")){
        resultado = resultado.replace("1", "a")
    }

    while (resultado.includes("2")){
        resultado = resultado.replace("2", "e")
    }

    while (resultado.includes("3")){
        resultado = resultado.replace("3", "i")
    }

    while (resultado.includes("4")){
        resultado = resultado.replace("4", "o")
    }

    while (resultado.includes("5")){
        resultado = resultado.replace("5", "u")
    }

    return resultado

}

const fraseParaDecodificar = codificar(fraseCodificar)

console.log(codificar(fraseCodificar))

console.log(codificar(fraseDecodificar))