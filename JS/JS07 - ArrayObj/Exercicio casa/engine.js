const alunos = [
    { nome: 'Ana', idade: 17, nota: 8, ano: '2B' },
    { nome: 'Brunno', idade: 16, nota: 6, ano: '2C' },
    { nome: 'Maria', idade: 16, nota: 9, ano: '2C' },
    { nome: 'João', idade: 15, nota: 5, ano: '3C' },
    { nome: 'Paulo', idade: 19, nota: 6, ano: '3C' },
    { nome: 'Carla', idade: 14, nota: 4, ano: '1F' }
];


console.log(alunos);

console.log(alunos[2])

console.log(alunos[5].nota)

let JsonAluno = JSON.stringify(alunos)

console.log(JsonAluno)