


function ehPalindromo(palavra){

    palavraInvertida = ""
 
    for (let index = palavra.length - 1; index >=0; index--){
        palavraInvertida += palavra[index]
    }
    let ehPalindromo = palavra === palavraInvertida
    return ehPalindromo
}

console.log(ehPalindromo("cachorro"))