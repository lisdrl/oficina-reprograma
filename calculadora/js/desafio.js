var inputValor = document.querySelector("#valor-hora")
var inputHoras = document.querySelector("#horas-projeto")
var resultado = document.querySelector("#resposta")

function calcular(){
    var valorHora = inputValor.valueAsNumber
    var horasProjeto = inputHoras.valueAsNumber
    resultado.textContent = "R$ " + (valorHora * horasProjeto).toFixed(2)
}