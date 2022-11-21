function calcularColor(color){
    //var color;
    num = color;
    if (num === 1){
        color = "negro";
    }else if (num ==2){
        color = "blanco";
    }else if (num == 3){
        color = "rojo";
    
    }else {
        color = "verde";
    }
    return color;
}
console.log ("El color es " +calcularColor(1));
console.log ("El color es " +calcularColor(2));
console.log ("El color es " +calcularColor(3));
console.log ("El color es " +calcularColor(8));