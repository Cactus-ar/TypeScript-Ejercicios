//- Notese como el orden del codigo no altera la funcionalidad
console.log("Tipos de Datos");
console.log("--------------");
//-- Operacion de suma ordinaria
var numero1 = 100;
var numero2 = 45;
var resultadojs = sumaJs(numero1, numero2);
var resultadots = sumaTs(numero1, numero2);
console.log(resultadojs);
console.log(resultadots);
console.log("--------------");
//-- Decimales?
var dec1 = 3.9963695858;
var dec2 = -5.59096396;
var resuldecjs = sumaJs(dec1, dec2);
var resuldects = sumaTs(dec1, dec2);
console.log(resuldecjs);
console.log(resuldects);
console.log("--------------");
//--Que pasa si uno de ellos es un string y el otro un boolean
var str1 = '69';
var str2 = false;
var resulstrjs = sumaJs(str1, str2);
var resulstrts = sumaTs(str1, str2);
console.log(resulstrjs);
console.log(resulstrts);
console.log("--------------");
function sumaJs(numero1, numero2) {
    return numero1 + numero2;
}
function sumaTs(numero1, numero2) {
    return numero1 + numero2;
}
