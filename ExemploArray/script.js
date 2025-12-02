let nomes=new Array()

function saveNomes(){
    let nome=document.getElementById("nome").value
    nomes[1]="Romano"
    nomes.unshift(nome)
    alert(nomes)
}