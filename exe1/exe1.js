function calculo(){
    let primeiro = Number(document.getElementById("primeiro").value)
    let segundo = Number(document.getElementById("segundo").value)

    let restoo = (primeiro - segundo)
    
    document.getElementById("calculo").innerHTML = " O valor subtraido é: " + restoo


}