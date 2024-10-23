let peso = 5000
let altura=2.00
let imc= (peso/(altura * altura)).toFixed(2)
let imcNumber = Number(imc);


if(imcNumber <= 18.5){
    console.log('abaixo do peso')
} else if
(imcNumber >= 18.5 && imcNumber <= 25){console.log('peso normal')
} else {
    console.log('acima do peso')
}
