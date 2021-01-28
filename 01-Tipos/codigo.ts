//- Notese como el orden del codigo no altera la funcionalidad



console.log("Tipos de Datos");
console.log("--------------");

//-- Operacion de suma ordinaria
const numero1 = 100;
const numero2 = 45;
const resultadojs = sumaJs(numero1, numero2);
const resultadots = sumaTs(numero1, numero2);
console.log(resultadojs);
console.log(resultadots);
console.log("--------------");

//-- Decimales?
const dec1 = 3.9963695858;
const dec2 = -5.59096396;
const resuldecjs = sumaJs(dec1, dec2);
const resuldects = sumaTs(dec1, dec2);
console.log(resuldecjs);
console.log(resuldects);
console.log("--------------");

//--Que pasa si uno de ellos es un string y el otro un boolean
const str1 = '69';
const str2 = false;
const resulstrjs = sumaJs(str1, str2);
const resulstrts = sumaTs(str1, str2);      //Este va a tirar un error de compilacion
console.log(resulstrjs);
console.log(resulstrts);
console.log("--------------");


function sumaJs(numero1, numero2){ //sin especificar tipos, Js va a concatenar lo que no entiende
    return numero1 + numero2
}

function sumaTs(numero1: number, numero2: number){
    return numero1 + numero2
}




