// continuação do module
// usando o module criado no outro arquivo
const {getName, setName} = require('./module.js');

console.log(getName());
console.log(setName('Gustavo'));
console.log(getName());