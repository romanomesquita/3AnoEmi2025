function conversor() {
    let temp=document.getElementById("valor").value
    let resultado=document.getElementById("resultado")
    let tempResult=(temp*1.8)+32
    
    resultado.innerHTML=tempResult+"°F"

}












// let escala = document.querySelector('input[name="escala"]:checked')
  // if(escala.value=="1"){
    //     resultado = (valorTemp*1.8)+32
    //     melancia.innerHTML = (resultado.toFixed(1) + "°C")
    // }
    // else if(escala.value=="2"){
    //     resultado = (valorTemp-32)/1.8
    //     melancia.innerHTML = (resultado.toFixed(1) + "°C")
    // }
