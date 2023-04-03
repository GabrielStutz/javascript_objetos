const cliente = {
    nome: "Gabriel",
    idade: 18,
    cpf: "13299256821",
    email: "gabrielstutz@gmail.com"
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)