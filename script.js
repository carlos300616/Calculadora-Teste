function insert(num) {
   var numero =  document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = numero + num;
}

function clean () {
    document.getElementById('resultado').innerHTML = "";
}

function calcular () {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

function total () {
    var capstart  = "";
    var taxaM = "";
    var tempoM = "";
 
    var jurosComposto = capstart *(1 + (taxaM/100)) ** tempoM;

    document.write(jurosComposto)
}
