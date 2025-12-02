function calc(){
    let name=document.getElementById("n1")
    let weight=document.getElementById("p1").value
    let height=document.getElementById("a1").value
    let result=parseFloat(weight)/(parseFloat(height)*parseFloat(height))
    alert(result.toFixed(1))
}