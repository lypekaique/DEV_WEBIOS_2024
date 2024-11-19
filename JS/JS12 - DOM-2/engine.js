//pega elemento por Id
let valor = document.getElementById('recebeValor')

// pega elemento por nome
let resultado = document.getElementById('resultado')

// funcition
const Tabuado = () => {
    let guardaValor = valor.value
    resultado.innerHTML = ''
    resultado.style.colr = "black"
if(guardaValor == ''){
   resultado.innerHTML = "insira a mensagem"
   resultado.style.color = "red"

}else{
    resultado.style.color = "black"

    for (let i = 1; i <= 10; i++) {
        let resultadov = guardaValor * i
        console.log(guardaValor, 'x', i, '=', resultadov)
        resultado.innerHTML += `${guardaValor} x ${i} = ${guardaValor} <br>`
      }

}




}
//limpar campos
const Limpar = () => {
    resultado.innerHTML = '' 
    valor.value = ''

}