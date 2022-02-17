function calculo(){
    let baseMaior = Number (document.getElementById("baseMaior").value)
    let baseMenor = Number(document.getElementById("baseMenor").value)
    let altura= Number(document.getElementById("altura").value)
    let area = ((baseMaior+baseMenor)*altura)/2
    document.getElementById("area").innerHTML="a area do trapezio: "+area+"cm²"

}