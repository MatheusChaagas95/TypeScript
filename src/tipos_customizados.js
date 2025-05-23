"use strict";
const alunos = [
    {
        nome: "Carlos",
        cursos: ["Front-end", "UX/UI"],
        idade: 20,
    },
    {
        nome: "Ana",
        cursos: ["Back-end", "Banco de Dados"],
        idade: 23,
    },
];
alunos.push({
    nome: "Julia",
    cursos: ["Python"],
    idade: 29,
});
const novoAluno = {
    nome: "Lucas",
    idade: 32,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
