const receta ={
    nombre: "Sandwich",
    ingredientes:[]
}
receta.ingredientes.push({nombre: 'Pan', cantidad: 2});
receta.ingredientes.push({nombre: "Queso", cantidad: 1});
console.log("El primer ingrediente es: ", receta.ingredientes[0].nombre)
let sumacan = 0;

for (let i = 0; i < receta.ingredientes.length; i++){
    sumacan+=receta.ingredientes[i].cantidad;
} 
console.log("La cantidad de ingrediente es:", sumacan)