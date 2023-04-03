const cliente = [
{
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
},
{
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [{
        nome:"Sophia",
        parentesco:"filha",
        dataNasc:"30/08/2020"
    }],
}
]

const listaDependentes = [...cliente[0].dependentes, ...cliente[1].dependentes];
console.table(listaDependentes);