// let sala = ['atumalca', 'atumaleico', 'monoteico', 'pokej']
// // for(let contador = 0; contador < 5 ; contador++){
// //     console.log(`Valor: ${contador}`)
// // }



// for (let i = 0; i < sala.length; i++){
//     console.log(`${sala[i]}`)
// }


let n = 10; 
let fib = [0 , 1]; 

for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; 
}

console.log(fib); 
