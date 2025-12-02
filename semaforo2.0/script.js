var buttons=document.getElementById("buttons")
var img=document.getElementById("img") 
let corIndice=0;
const ordenasinal= (event) => {//testar o que o addEventListener está retornando para a função/método
    console.log(event.target.id) //teste 1
   
}

buttons.addEventListener("click",ordenasinal)



















//objeto literal
const ligarLuz = {
    "red":      () => img.src="./imagens/vermelho.png",
    "yellow":   () => img.src="./imagens/amarelo.png",
    "green":    () => img.src="./imagens/verde.png",
   
}




 //console.log(event.target) //teste 2
    //console.log(event.target.id) //teste 3
    //ligarLuz.red() //1ºforma de chamar função de um objeto
    //ligarLuz["red"]()//2ºforma de chamar função de um objeto