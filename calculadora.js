
window.onload = function () {

    var botones = document.getElementsByClassName("ctaButtonNum");
    var botonReset = document.getElementById("boton-reset");
    var botonSuma = document.getElementById("boton-sumar");
    var botonResta = document.getElementById("boton-restar");
    var botonDivision = document.getElementById("boton-dividir");
    var botonMultiplicar = document.getElementById("boton-multiplicar");
    var botonPorcentaje = document.getElementById("boton-porcentaje");


    var botonSolucion = document.getElementById("boton-Resultado");


    botonReset.addEventListener("click", reset);
    botonSuma.addEventListener("click", clickSuma);
    botonResta.addEventListener("click", clickResta);
    botonDivision.addEventListener("click", dividir);
    botonMultiplicar.addEventListener("click", multiplicar);
    botonPorcentaje.addEventListener("click", porcentaje);

    botonSolucion.addEventListener("click", resultado);

    for (let i = 0; i < botones.length; i++) {

        const boton = botones[i];
        boton.addEventListener("click", clickBotones);

    }

}

var memo = 0;
var operacion = null;
var limpiarInput = false;
var resultaPorcentaje


const clearInput = function () {
    var input = document.getElementById("input-prueba");
    input.value = 0;
}


const clickBotones = function (e) {

    if (limpiarInput) {
        clearInput();
        limpiarInput = false;
    }

    var boton = e.target;
    var valorBoton = boton.innerText;

    var input = document.getElementById("input-prueba");

    var pasarNumber = Number(input.value);

    if (pasarNumber === 0) {

        input.value = valorBoton;

    } else {
        input.value = input.value + valorBoton;
    }

}

const reset = function () {

    var input = document.getElementById("input-prueba");

    input.value = 0;

}

const clickResta = function () {
    limpiarInput = true;

    var input = document.getElementById("input-prueba");

    if (operacion !== null) {
        //No es la primera operacion
        var pasarNumberInputV = Number(input.value);
        memo = memo - pasarNumberInputV;
        input.value = memo;
    } else {
        memo = Number(input.value);
    }

    operacion = "-";
}

const clickSuma = function () {
    limpiarInput = true;

    var input = document.getElementById("input-prueba");

    if (operacion !== null) {
        //No es la primera operacion
        var pasarNumberInputV = Number(input.value);
        memo = memo + pasarNumberInputV;
        input.value = memo;
    } else {
        memo = Number(input.value);
    }

    operacion = "+";
}


const multiplicar = function () {

    limpiarInput = true;

    var input = document.getElementById("input-prueba");

    if (operacion !== null) {
        //No es la primera operacion
        var pasarNumberInputV = Number(input.value);
        memo = memo * pasarNumberInputV;
        input.value = memo;
    } else {
        memo = Number(input.value);
    }

    operacion = "*";

}

const dividir = function () {

    limpiarInput = true;

    var input = document.getElementById("input-prueba");

    if (operacion !== null) {
        //No es la primera operacion
        var pasarNumberInputV = Number(input.value);
        memo = memo / pasarNumberInputV;
        input.value = memo;
    } else {
        memo = Number(input.value);
    }

    operacion = "/";

}



const porcentaje = function () {

    limpiarInput = true;


    var input = document.getElementById("input-prueba");
   
    var pasarNumberInputV = Number(input.value);
    resultaPorcentaje = pasarNumberInputV / 100;
    input.value = resultaPorcentaje;

}




// tambien tengo que crear funcino para el igual y adentro usamos 4 if para preguntar sin el signo string es tal signo y si es asi uso ebn la
// funcion el verdadero signo para hacer la operacion


const resultado = function () {

    var input = document.getElementById("input-prueba");


    if (operacion === "+") {

        var pasarNumberMemo = Number(memo);
        var pasarNumberInputV = Number(input.value);

        var resultadoSuma = pasarNumberMemo + pasarNumberInputV;

        input.value = resultadoSuma;


    } else if (operacion === "-") {

        var pasarNumberMemo = Number(memo);
        var pasarNumberInputV = Number(input.value);

        var resultadoResta = pasarNumberMemo - pasarNumberInputV;

        input.value = resultadoResta;


    } else if (operacion === "*") {

        var pasarNumberMemo = Number(memo);
        var pasarNumberInputV = Number(input.value);

        var resultadoMulti = pasarNumberMemo * pasarNumberInputV;

        input.value = resultadoMulti;

        operacion = "*";

    } else if (operacion === "/") {

        var pasarNumberMemo = Number(memo);
        var pasarNumberInputV = Number(input.value);

        var resultadoDivis = pasarNumberMemo / pasarNumberInputV;

        input.value = resultadoDivis;

    }



    operacion = null;
}


