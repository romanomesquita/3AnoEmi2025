function calculo(){
    let potencia=document.getElementById("potencia").value
    let largura=document.getElementById("largura").value
    let comprimento=document.getElementById("comprimento").value
    let resultado=document.getElementById("resultado")
    let calculo=(((largura*comprimento)*18)/potencia)
    if (calculo<1){
        calculo=1
    }
    if(potencia<45 || largura<=0 || comprimento<=0){
        window.alert("há campos com valores inválidos")

    }
    else{
        resultado.innerHTML="Para as dimensões do cômodo, serão necessárias aproximadamente "+ calculo.toFixed(0) +" lâmpadas de "+ potencia +" Watts."

    }
    
}