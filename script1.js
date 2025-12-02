function lamp(){
    window.location.href = "/Lâmpada/index.html"
}

function raio(){
    window.location.href = "/raioCirculo/index.html"
}

function semaforo(){
    window.location.href = "/semaforo/index.html"
}

function login(){
    var user=document.getElementById("user").value
    var senha=parseInt(document.getElementById("senha").value)
    var user1="root"
    var senha1=123456
    if ((user==user1)&&(senha==senha1)){
        alert("você será direcionado para outra página!")
        window.location.href="index.html"
        
    }
    else{
        alert("login ou senha inválidos!!!!")
    }
}

