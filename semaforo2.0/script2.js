var buttons=document.getElementById("buttons")
var img=document.getElementById("img") 
let corIndice=0;
const ordenasinal= (event) => {//testar o que o addEventListener está retornando para a função/método
    //console.log(event) //teste 1
    //console.log(event.target) //teste 2
    //console.log(event.target.id) //teste 3
    //ligarLuz.red() //1ºforma de chamar função de um objeto
    //ligarLuz["red"]()//2ºforma de chamar função de um objeto
    ligarLuz[event.target.id]()//3ºforma de chamar função de um objeto
}
//function próximo indice
const proxIndice = () => corIndice = corIndice < 2 ? ++corIndice : 0

// com if
/*
const proxIndice = () =>{
    if (corIndice < 2){
        corIndice++
    } 
    else{
        corIndice=0
    }
} 
*/
//arrow function mudar cor
const mudaCor = () =>{
    const cores=["red","yellow","green"]
    const cor=cores[corIndice]
    ligarLuz[cor]();
    proxIndice();
}

//objeto literal
const ligarLuz = {
    "red":      () => img.src="./imagens/vermelho.png",
    "yellow":   () => img.src="./imagens/amarelo.png",
    "green":    () => img.src="./imagens/verde.png",
    "auto":     () => setInterval(mudaCor, 3000)
}

buttons.addEventListener("click",ordenasinal)
