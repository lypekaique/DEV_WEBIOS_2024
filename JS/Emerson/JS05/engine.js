let media, faltas;
media = 10
faltas = 4
// 6.5
if (media >= 7 && faltas <= 5){
    console.log(`Aluno Aprovado.`);
} else if (media >= 6.5 && faltas <= 5) {
    console.log(`Aluno Ap. Conselho.`);
} else {
    console.log(`Aluno Reprovado.`);
}
console.log(`Fim.`);