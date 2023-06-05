//Alunos array
const alunos = [
    { nome: 'Gustavo', nota: 5},
    { nome: 'Julia', nota: 5},
    { nome: 'Paula', nota: 7},
    { nome: 'Wagner', nota: 6},
    { nome: 'Pedro', nota: 9}];

//Filtro de notas maio ou igual a 6
const alunosPassaram = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
}

const alunosAprovados = alunosPassaram(alunos);
console.log(alunosAprovados)