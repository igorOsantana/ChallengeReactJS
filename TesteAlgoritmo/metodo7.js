// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

function isEqual (arr1, arr2) {

    const lengthIsEqual = arr1.length === arr2.length;

    const itemsIsEqual = arr1.every((item, index) => item === arr2[index]);

    return lengthIsEqual && itemsIsEqual ?  true : false;
}