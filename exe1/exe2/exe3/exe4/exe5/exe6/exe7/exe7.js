function calculo(){
    let peso = Number(document.getElementById("peso").value)
    let peso1 = (peso *(15/100))
    let maispesado = peso1+peso
    let peso2 = (peso*(20/100))
    let maisleve = peso - peso2
    document.getElementById("engordar").innerHTML="seu novo peso sera "+ maispesado
    document.getElementById("emagrecer").innerHTML="Seu novo peso : "+maisleve
}