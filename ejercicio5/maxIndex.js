function maxIndex(arr){
    let valor = 0
    let ind = 0
        if (arr.length === 0)
            return -1;
        var maxIndex = arr[0];
        for (let i = 0; i < arr.length; i++){
         if (valor < arr[i]){
             valor =arr[i]
             ind= i
         }
        }
     return ind;
}  

 
 console.log(maxIndex([1,3,2]));
 console.log(maxIndex([10,9,8,7,6,5,4]));
 console.log(maxIndex([]));