//calcular media
//function mediaAluno(n1, n2, n3){
//    const media = (n1 + n2 + n3) / 3
//    return media
//}
//console.log("A média do aluno é: "+mediaAluno(7,7,7))

//

function calculoMediaFinal(n1, n2, n3, notaFinal){
    const media = (n1 + n2 + n3) / 3

    const mediaFinal = (media + notaFinal) / 2

    console.log(media)
    console.log(mediaFinal)
}

console.log(calculoMediaFinal(7,7,7,5))


