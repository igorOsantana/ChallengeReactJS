// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. 
// Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

function removeItemsOfArray (arr, item1, item2) {

    for(var i = 0; i < arr.length; i++){
        if(arr[i] == item1) {
            arr.splice(arr.indexOf(item1), 1);
        }
        if(arr[i] == item2) {
            arr.splice(arr.indexOf(item2), 1);        
        }
    }
    return arr;
}