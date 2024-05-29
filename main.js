const botao = document.querySelector('#enviar')

botao.addEventListener('click', function(e){
    e.preventDefault()

    const span = document.querySelector('#valor')
    valorInput = document.querySelector('#pessoas')

    span.innerHTML = `${calcula(valorInput.value)}`
})

function calcula(pessoas){
    const valor = 220 / pessoas
    return valor
}
