function multiplique(){
    //obter dados
    let salario = Number(document.getElementById("salario").value)
    let vendas = Number(document.getElementById("vendas").value)
    let porcentagem = Number(document.getElementById("porcentagem").value)
    
    //calcular
    let comissao = vendas*porcentagem/100
    let total = salario + comissao
    // saida
    document.getElementById("total").innerHTML = " o valor da comissao é R$ " + comissao + " e o valor total é R$ " + total 
}