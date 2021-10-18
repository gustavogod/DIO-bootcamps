let arr = [3, 5, 7];
arr.foo = ["hello", "world"];

// o for in executa primeiro para os indices, e depois percorre as propriedades, apenas retornando o nome da propriedade
for (let i in arr) {
    console.log(i); // 0, 1, 2, "foo"
}
console.log('\n');

// o for of executa para todos items das propriedades NUMERÁVEIS do objeto, que é o próprio array
for (let i of arr.nums) {
    console.log(i);
}