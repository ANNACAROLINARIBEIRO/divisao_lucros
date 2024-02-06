function calcularDivisaoLucros() {
    var lucro = parseFloat(document.getElementById('lucro').value);
    var socios= parseFloat(document.getElementById('socios').value);
    
    // vereficar se os valores sao numneros
    if (isNaN(lucro) || isNaN(socios)) {
        alert('favor inserir numeros validos');
        return;

    }
    // calcular a soma

    var resultado = lucro/socios;


    document.getElementById('resultado').innerText='resultado: ' + resultado;

}