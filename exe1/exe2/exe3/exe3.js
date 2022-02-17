function calculo(){
    let dividendo = Number (document.getElementById("dividendo").value)
    let divisor = Number (document.getElementById("divisor").value)

    if (divisor == 0) {
      } else {
        let quociente = (dividendo / divisor)

        document.getElementById("quociente").innerHTML = "Quociente: " + quociente

      
    }
    

}