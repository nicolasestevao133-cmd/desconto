// Variáveis que armazenam os valores da compra e do desconto
var total = 0
var tDesconto = 0
var desconto = 0

// Identifica o formulário e executa o código ao enviar
document.getElementById("formulario").addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault()

    // Lê o valor digitado no formulário
    total = Number(document.getElementById("valor").value)

    // Zera os valores para realizar um novo cálculo
    tDesconto = 0
    desconto = 0

    // Se a compra for menor que R$ 100, não tem desconto
    if (total < 100) {
        tDesconto = total
    }

    // Se a compra for de R$ 100 até R$ 2.006, aplica 5%
    else if (total >= 100 && total <= 2006) {
        desconto = total * 0.05
        tDesconto = total - desconto
    }

    // Se a compra for maior que R$ 2.006, aplica 10%
    else {
        desconto = total * 0.1
        tDesconto = total - desconto
    }

    // Mostra o total com desconto no console
    console.log(tDesconto)

    // Exibe o valor original da compra
    document.getElementById("total").textContent =
        total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

    // Exibe o valor do desconto
    document.getElementById("desconto").textContent =
        desconto.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

    // Exibe o total final a pagar
    document.getElementById("final").textContent =
        tDesconto.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
})