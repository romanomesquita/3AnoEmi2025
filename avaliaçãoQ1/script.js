let nomes=new Array()
function cadastrar(){
    let nome=document.getElementById("nome").value
    nomes.push(nome)
    alert(nomes)
}

function consultar(){
    let nome=document.getElementById("nome").value
    if((nome==nomes[0])||(nome==nomes[1])||(nome==nomes[2])||(nome==nomes[3])||(nome==nomes[4])||(nome==nomes[5])||(nome==nomes[6])||(nome==nomes[7])||(nome==nomes[8])||(nome==nomes[9])){
            alert("usuário é cadastrado")
    }
    else
        alert("usuário não localizado")

}