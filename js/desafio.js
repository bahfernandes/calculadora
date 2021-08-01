var inputValorHora = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')
var custoTotal = document.querySelector('span')

function calcular(){
    var valor = inputValorHora.valueAsNumber
    var projeto = inputHorasProjeto.valueAsNumber

    var total = valor * projeto
    var precoDuasCasas = total.toFixed(2)

    custoTotal.textContent = 'R$ ' + precoDuasCasas
}