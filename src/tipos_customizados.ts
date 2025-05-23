type aluno = {
	nome: string;
	cursos?: string[];
	idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
	nome: "Julia",
	cursos: ["Python"],
	idade: 29,
})

const novoAluno: aluno = {
	nome: "Lucas",
	idade: 32,
}

function exibeAluno(aluno: aluno) {
	console.log(aluno.nome)
}