function calculo(){
    let pesoKg=Number(document.getElementById("pesoKg").value)
    let pesoG= (pesoKg*1000)
    
    document.getElementById("pesoG").innerHTML="peso "+pesoG+"gramas"

}