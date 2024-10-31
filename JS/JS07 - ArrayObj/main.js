let aluno = {
    nome: 'Manassés B',
    cor: 'bege' ,
    idade: 12,
    altura: 2 ,
    isCrach: true,
    isCamisa: true,
    isPaciencia: true,
    isChora: true,
    notas: [10, 8, 9, 7, 8.5]
}
// console.log(aluno)

// console.log(aluno.nome)

// console.log(aluno.isChora)

// console.log(aluno.notas[4])

// console.clear

    let Ios = [
        {
            nome: 'Manassés B',
            cor: 'bege' ,
            idade: 12,
            altura: 2 ,
            isCrach: true,
            isCamisa: true,
            isPaciencia: true,
            isChora: true,
            notas: [10, 8, 9, 7, 8.5]
        },
        {
            nome: 'Atumalaca',
            cor: 'Azul' ,
            idade: 8,
            altura: 1 ,
            isCrach: false,
            isCamisa: false,
            isPaciencia: true,
            isChora: false,
            notas: [10000000000000000, 10000000000000000000000000, 1000000000000000000000000000000000000000, 100000000000000000000000000000000]
        },
        {
            nome: 'Nego nei',
            cor: 'Mortal' ,
            idade: 9999999,
            altura: 999999 ,
            isCrach: false,
            isCamisa: false,
            isPaciencia: false,
            isChora: true,
            notas: [0, 0, 0, 0]
        }
    ]


for (i = 0; i < Ios.length; i++){
    let login = Ios[i]
    if(login.isCrach == true){
        console.log("o aluno tem cracha")
    }
    else{
        console.log("aluno não tem cracha")
    }
}


let semcracha = Ios.filter((item) => item.isCrach === false)
// console.log(semcracha)

// console.log('aluno')
//transforma json
console.log(JSON.stringify(aluno))
//destranforma json

let jsonito = '{"nome":"Manassés B","cor":"bege","idade":12,"altura":2,"isCrach":true,"isCamisa":true,"isPaciencia":true,"isChora":true,"notas":[10,8,9,7,8.5]}'
console.log(JSON.parse(jsonito))