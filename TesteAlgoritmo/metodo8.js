// 8) Implemente um método que remova os aninhamentos de um array de arrays para um array unico.
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5]

function getUniqueArray (arr) {

    const uniqueArray = arr.flat();

    return uniqueArray;
}