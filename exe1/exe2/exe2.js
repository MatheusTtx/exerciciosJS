function calcula(){
    let valor_um = Number(document.getElementById("valor_um").value)
    let valor_dois = Number(document.getElementById("valor_dois").value)

    let calculo = (valor_um * valor_dois)

    document.getElementById("total").innerHTML = "a multiplicacao é " + calculo
}