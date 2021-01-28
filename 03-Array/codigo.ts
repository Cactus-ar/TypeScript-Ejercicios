//- Arrays


//-- un simple array de strings
let animales:string[];
animales = ["perro", "gato", "loro"];
console.log(animales);

//arrays que pueden alojar todo tipo
let mezclados:any[];

mezclados = ["pesca", 12, false];
console.log(mezclados);


//--loops de arrays sencillos
for(const animal of animales){
    console.log(animal.toUpperCase());
}
