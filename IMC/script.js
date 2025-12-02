function calculaImc(){
    let nome=document.getElementById("nome").value
    let altura=document.getElementById("altura").value
    let peso=document.getElementById("peso").value
    let resultado=document.getElementById("resultado")
    let imc=(peso/(altura**2)).toFixed(2)

    resultado.innerHTML="Seu I.M.C. é "  + imc
}