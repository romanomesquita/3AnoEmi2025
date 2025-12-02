
var melancia=document.getElementById("txtarea")
var btn=document.getElementById("btn1")
function mostrar(){
    var nome=prompt("Digite seu nome:")
    var idade=prompt("Digite sua idade:")
    var cidade=prompt("Digite o nome da sua Cidade:")
    melancia.textContent="Nome: "+nome+ " idade: "+idade+" Cidade: "+cidade 
    alert("sistema finalizado com sucesso!!")
}
btn.addEventListener("click",mostrar)
    