var btRed=document.getElementById("red")
var btYellow=document.getElementById("yellow")
var btGreen=document.getElementById("green")
var btauto=document.getElementById("auto")
var img=document.getElementById("img") 
var time=0
var i=1

// function vermelho(){
//     img.src="./imagens/vermelho.png"    
// }
// function amarelo(){
//     img.src="./imagens/amarelo.png"    
// }

// function verde(){
//     img.src="./imagens/verde.png"    
// }
const liga={
    "vermelho":     ()=>img.src="./imagens/vermelho.png",
    "amarelo":      ()=>img.src="./imagens/amarelo.png",
    "verde":        ()=>img.src="./imagens/verde.png",
    "auto":         ()=>{
        while(i<=100){ 
            i++
            time=time+3000 
            setTimeout(liga["vermelho"],time)
            time=time+3000
            setTimeout(liga["verde"],time) 
            time=time+3000
            setTimeout(liga["amarelo"],time)
        }   
    }
}
    
// function auto(){
    
// }

btRed.addEventListener("click",liga["vermelho"])
btYellow.addEventListener("click",liga["amarelo"])
btGreen.addEventListener("click",liga["verde"])
btauto.addEventListener("click",liga["auto"])












// btRed.addEventListener("click",liga["vermelho"])
// btYellow.addEventListener("click",liga["amarelo"])
// btGreen.addEventListener("click",liga["verde"])
// btauto.addEventListener("click",auto)

