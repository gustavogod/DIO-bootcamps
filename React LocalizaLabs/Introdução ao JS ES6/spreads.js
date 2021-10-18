// Spreads
// Usados para concatenação
var arr1 = ['tres', 'quatro'];
var arr2 = ['um', 'dois', ...arr1, 'cinco', 'seis'];
//console.log(arr2);

// também usado para passar listas de parâmetros para funções
function fn(x, y, z) {}
var args = [0, 1, 2];
fn(...args);
//assim, passa 0, 1 e 2 para os argumentos x, y, e z