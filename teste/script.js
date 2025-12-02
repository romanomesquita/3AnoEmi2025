var btnonoff=document.getElementById("btnonoff")
var melancia=document.getElementById("lampada")
function btn(){
   if (btnonoff.textContent=="LIGAR"){
        liga()
        btnonoff.textContent="DESLIGAR"
    }
    else{
        desliga()
        btnonoff.textContent="LIGAR"
    }    
}
function quebrar(){
    melancia.src="quebrada.jpg"
}
function desliga(){
    melancia.src="lampOff.jpg"
}
function liga(){
    melancia.src="lampOn.jpg"
}
btnonoff.addEventListener("click",btn)
btnonoff.addEventListener("dblclick",quebrar)
melancia.addEventListener("mouseover",liga)
melancia.addEventListener("mouseleave",desliga)
