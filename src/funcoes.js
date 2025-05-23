"use strict";
function calcularArea(base, altura) {
    return (base * altura);
}
const calcularArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    //numeros.reduce()
    console.log(numeros);
}
//void
function teste() {
    if (10 > 5) {
        return 'dez é maior que cinco';
    }
    else {
        return 5;
    }
}
const resultadoDeTeste = teste();
