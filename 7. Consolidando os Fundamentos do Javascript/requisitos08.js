
let entrada = [10, 5, 20, 15, 20, 11]

function maiorGasto(gastos){
    let contador = 0
    let maiorGastoAtual = gastos[0]

    for (let index = 0; index < gastos.length; index++){
        if (gastos[index] > maiorGastoAtual){
            maiorGastoAtual = gastos[index]
        }
    } 

    for (let index = 0; index < gastos.length; index++){
        if (gastos[index] === maiorGastoAtual){
            contador++
        }
    }
    return `O maior gasto é de ${maiorGastoAtual} e ele se repete ${contador} vezes`

}


console.log(maiorGasto(entrada))
