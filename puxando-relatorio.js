const cliente = {
    nome: "Gabriel",
    idade: 18,
    cpf: "13299256821",
    email: "gabrielstutz@gmail.com",
    fones: [999999999, 988888888],
    dependentes: [{
        nome:"Sara Thompson",
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

let relatorio = "";

for ( let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function" ) {
        continue;
    } else {
        relatorio += `
        ${info}: ${cliente[info]}`;
    }
}

console.log(relatorio);