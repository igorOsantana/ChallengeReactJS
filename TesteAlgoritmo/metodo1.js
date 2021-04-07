// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

function getNewArray (qty, value) {
    var newArray = [];

    for(var i = 0; i < qty; i++) {
        newArray.push(value);
    }

    return newArray; 
}