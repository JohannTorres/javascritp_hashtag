

function calcularRendimento(valorInvestimento, taxaJuros){

    const rendimento = valorInvestimento * (taxaJuros / 100)
    return rendimento
}

console.log(calcularRendimento(1000,5))