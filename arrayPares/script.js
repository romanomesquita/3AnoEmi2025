let cont=0
let nPares=new Array()  
let med=0
let resultado=document.getElementById("resultado")
function armazenamento(){
    let n1=document.getElementById("numero").value      
    ////////// estrutura condicional para testar e armazenar apenas números pares///////////////
    if((n1 % 2===0)&&(cont<=9)){
        nPares.push(parseInt(n1))
        cont++
        alert("você inseriu um número par!"+nPares)
        
    }
    //////// mostrar msg quando o número não for par ///////
    else{
        if(cont>9){
            alert("o Array já possui 10 números pares")
        }
        else{      
            alert("número digitado inválido!!! Digite um número par")
        }
    }
    ////// mostrar msg quando o array estiver cheio(10 ítens)////
    

}
function media(){
    
    if (cont>9){
        med=(nPares[0] + nPares[1] + nPares[2] + nPares[3] + nPares[4] + nPares[5] + nPares[6] + nPares[7] + nPares[8] + nPares[9])/10
        //alert("A média dos números pares foi: "+med)
        resultado.innerHTML="A média do Array é : "+med
    }
}
