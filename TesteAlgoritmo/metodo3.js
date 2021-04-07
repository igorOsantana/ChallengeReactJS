// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

function cleanUpArray (arr) {
    var newArrayClean = [];

    for(var i = 0; i < arr.length; i++) {
        
        const hasUnnecessaryItems = [null].some(() => arr[i]);
        
        if(hasUnnecessaryItems) {
            newArrayClean.push(arr[i]);
        }
    }

    return newArrayClean; 
}