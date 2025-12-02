let senhas= new Array()
let num=0
let ordem=0
function pedirsenha(){
num=num+1
senhas.push(num)

alert(senhas)
}
function mostrarsenha(){
alert(senhas[ordem])
ordem++
}
