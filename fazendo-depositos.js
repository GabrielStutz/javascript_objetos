const cliente = {
    nome: "Gabriel",
    idade: 18,
    cpf: "13299256821",
    email: "gabrielstutz@gmail.com",
    fones: [999999999, 988888888],
    dependentes: [{
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20032011"
    }, 
    {
        nome:"Samia Maria",
        parentesco: "filha",
        dataNasc: "04/01/2014"
    }],
    saldo: 100,
    depositar: function(valor) {
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)