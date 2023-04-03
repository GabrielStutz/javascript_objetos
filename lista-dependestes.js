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
    }]
}

cliente.depentes.push({
    nome:"Samia Maria",
    parentesco: "filha",
    dataNasc: "04/01/2014"
})

console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/01/2014");

console.log(filhaMaisNova[0].nome);