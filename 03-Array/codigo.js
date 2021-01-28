//- Arrays
//-- un simple array de strings
var animales;
animales = ["perro", "gato", "loro"];
console.log(animales);
//arrays que pueden alojar todo tipo
var mezclados;
mezclados = ["pesca", 12, false];
console.log(mezclados);
//--loops de arrays
for (var _i = 0, animales_1 = animales; _i < animales_1.length; _i++) {
    var animal = animales_1[_i];
    console.log(animal.toUpperCase());
}
