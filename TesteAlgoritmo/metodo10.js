// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

function getEqualItemsInsideArrays (arr1, arr2) {
    const newArr = [];
    
    const itemsEquals = arr1.filter(item => arr2.includes(item));
    
    newArr.push(itemsEquals) 

    return newArr;
}