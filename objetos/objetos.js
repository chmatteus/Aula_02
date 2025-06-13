const aluno = {
    nome: 'Mateus',
    idade: '29',
    curso: 'Desenvolvimento de Sistemas'
};

console.log(aluno.nome);
console.log(aluno["idade"]);

aluno.matricula = "2025A";
aluno.idade = "29"
console.log (aluno);
delete aluno.curso;