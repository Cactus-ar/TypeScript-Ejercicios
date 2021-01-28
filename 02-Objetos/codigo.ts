//- 02- Objetos en TS

const cliente = {                           //siempre es mejor que el compilador infiera lkos tipos
    Nombre: "Gabriel",
    Domicilio: "Algun Paraje 2233",
    CodPos: 1335
};

console.log(cliente);


const automovil: {              //puede que en esta estructura haya algun problema si el dato viene sucio
    pruertas:number,
    ruedas:number
} = {
    pruertas: 5,
    ruedas: 4
};

console.log(automovil.pruertas)


//-- Objetos anidados
let factura = {
    id: 11,
    nombre: "Gabriel",
    domicilio: "Algun paraje 123",
    promociones: ["10%", "20%"],
    renglones: {
        cantidad: 2,
        descripcion: "Remeras ",
        precio: 200
    }
};

console.log(factura.renglones.descripcion)