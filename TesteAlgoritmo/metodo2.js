// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

function revertArray (arr) {
    var invertedArray = [];
    
    for(var i = arr.length -1; i >= 0 ; i--) {
        invertedArray.push(arr[i]);
    }

    return invertedArray; 
}