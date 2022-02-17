function calculo(){
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    let porcentagem = Number(document.getElementById("porcentagem").value)

    let comissao = vendas * porcentagem / 100
    let total = salario + comissao

    document.getElementById("total").innerHTML = "o total da comissao: "+comissao+"e o valor final"+total
}