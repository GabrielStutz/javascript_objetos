const cliente = {
    nome: "Gabriel",
    idade: 18,
    cpf: "13299256821",
    email: "gabrielstutz@gmail.com",
    fones: [999999999, 988888888],
    dependentes: [{
        nome:"Sara",
        parentesco:"filha",
        dataNasc:"20/03/2011"
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

function oferecerSeguro(obj) {
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);