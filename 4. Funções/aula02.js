function enviarMensagem(){
    console.log("Para continuar você precisa informar o seu nome para cadastro!")
}
//enviarMensagem()

function cadastrar(nome, sobrenome){
    console.log(`Olá, ${nome} ${sobrenome} você foi cadastrado com sucesso!`)
}
//cadastrar("johann", "torres")

function banco(deposito, saque){
    let saldo = deposito - saque
    return saldo
}
//console.log(banco(100,50))

function main(){
    enviarMensagem()
    cadastrar("juliana", "lira")
    let saldo = banco(100,20)
    console.log(`O saldo atual da sua conta é:${saldo} reais`)
}

main()
