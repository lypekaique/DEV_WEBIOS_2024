class Aluno {
    constructor(nome, cor, idade, altura, isCrach, isCamisa) {
        this.nome = nome;
        this.cor = cor;
        this.idade = idade;
        this.altura = altura;
        this.isCrach = isCrach;
        this.isCamisa = isCamisa;
    }
}

const nomes = ["felipe", "rodrigo", "caio", "atumalaca", "mato", "laco"];
const cores = ["azul", "blue", "black", "azul", "blue", "black"];
const idades = [24, 22, 15, 19, 18, 17];
const alturas = [1.60, 1.80, 2.00, 1.52, 1.11, 1.84];
const craches = [true, true, false, false, true, false];
const camisas = [true, true, false, false, true, false];

    let alunos = [];
    for (let i = 0; i < nomes.length; i++) {
        let aluno = new Aluno(nomes[i], cores[i], idades[i], alturas[i], craches[i], camisas[i]);
        alunos.push(aluno);
    }

let search = alunos.find(aluno => aluno.nome === "atumalaca");

console.log(search);
