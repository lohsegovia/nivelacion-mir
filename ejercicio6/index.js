//paso4
const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]       
  }
  // paso5
  console.log("La edad es:" +pedro.edad);
  //paso 6
  pedro.estatura= 1.8
  //paso7
  delete pedro.activo
  //paso8
  for (const property in pedro){
    console.log(`${property}: ${pedro[property]}`)
  }
  //paso9
  function saluda(){
    console.log("Hola, me llamo "+pedro.nombre)
  } return saluda();
  
