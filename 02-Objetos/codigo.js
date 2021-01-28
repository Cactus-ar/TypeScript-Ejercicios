//- 02- Objetos en TS
var cliente = {
    Nombre: "Gabriel",
    Domicilio: "Algun Paraje 2233",
    CodPos: 1335
};
console.log(cliente);
var automovil = {
    pruertas: 5,
    ruedas: 4
};
console.log(automovil.pruertas);
//-- Objetos anidados
var factura = {
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
console.log(factura.renglones.descripcion);
