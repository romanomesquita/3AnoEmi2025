const btnOn=document.getElementById("btnOn")
const btnOff=document.getElementById("btnOff")
const lamp=document.getElementById("lamp")
var cont=0;
var estado=0;

function lampOn(){
    if (estado==0){
        estado=1;
        if ((cont>=2)&&(estado==1)){
            lamp.src="quebrada.jpg"
            cont=0;
        }
        else{    
            lamp.src="lampOn.jpg"
            cont++
        }

    }
    
}

function lampOff(){
    if(estado=1){
        estado=0
        lamp.src="lampOff.jpg"
        
    }
    
    
}

btnOn.addEventListener('click',lampOn)
btnOff.addEventListener('click', lampOff)