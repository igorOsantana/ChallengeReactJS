// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

function divideArrayByQuantity (arr, qty) {

    const newArray = [];

    for(var i = 0; i < arr.length; i += qty) {
        newArray.push(arr.slice(i, i + qty));
    }

    return newArray;
}