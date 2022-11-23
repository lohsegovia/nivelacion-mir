function join(arr){
var text="";
     for (let i = 0; i < arr.length; i++){
         text=text + " " + arr[i];
         }
         return text;
     
    
 }
 console.log (join(["Hola", "Mundo"]));
 console.log (join(["Make", "It","Real"]));
 console.log (join([""]));
