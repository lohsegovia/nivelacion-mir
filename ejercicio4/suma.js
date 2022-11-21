function suma(numero){
    resultado = 0;
    num = numero;
    for( i = 1 ; i <= num ; i++){
        resultado +=i;
    }
    return resultado;
}

console.log(suma(4));
console.log(suma(10));
console.log(suma(15));