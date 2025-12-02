let senhas=new Array();
let senhasPrefer=new Array();
let i=1
let iP=1
let painelsenhasN=document.getElementById("painelsenhasN")
let painelsenhasP=document.getElementById("painelsenhasP")
function senhaN(){
    senhas.push(i)
    i++
    //alert(senhas)
    mostrarsenhaN();
}

function senhaP(){
    senhasPrefer.push(iP)
    iP++
    //alert(senhasPrefer)
    mostrarsenhaP()
}

function mostrarsenhaN(){
    painelsenhasN.innerHTML="Últimas senhas chamadas: "+senhas
}

function mostrarsenhaP(){
    painelsenhasP.innerHTML="Últimas senhas chamadas: "+senhasPrefer
}