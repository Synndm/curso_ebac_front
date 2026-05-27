const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "Carlos", nota: 7 },
    { nome: "Ana", nota: 4 },
    { nome: "Pedro", nota: 6 }
];

function alunosAprovados(lista) {
    return lista.filter(aluno => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));