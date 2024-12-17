const nome = "johann"
const investimentos = [500, 300, 100]



function gerarlistaInvestimentos(investimentos, nome){
    if (investimentos.length === 0){
        return "Vazio"
    }

    const lista = []
    for (let investimento of investimentos){
        lista.push({investimento: investimento, nome: nome})
    }
    lista.sort((a,b) => (a.investimento > b.investimento ? 1 : -1)) //ordem simplesmente com valor de 1 e -1
    return lista
}

console.log(gerarlistaInvestimentos(investimentos, nome))