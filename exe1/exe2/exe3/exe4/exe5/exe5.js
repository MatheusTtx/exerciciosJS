function calculo(){
    let valor = Number (document.getElementById("produto").value)
    let desconto = (valor*10/100)
    let valorfinal = (valor-desconto)
    
    document.getElementById("descontofinal").innerHTML = "O valor do desconto é de R$" + desconto.toFixed(2) + "."
    document.getElementById("valorfinal").innerHTML =  "Preço final R$" + valorfinal.toFixed(2) + "."

}