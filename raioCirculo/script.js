function calculaArea() {
    let valorRaio = document.getElementById("raio").value
    let areaResult = ((valorRaio * valorRaio) * 3.14)
    let resultado = document.getElementById("resultado")

    resultado.innerHTML = areaResult


}