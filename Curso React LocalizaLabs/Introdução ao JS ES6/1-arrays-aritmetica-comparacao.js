const user = ['Guilherme', 'Pedro', 'Ana'];

const gender = {
  MAN: Symbol('M'),
  WOMAN: Symbol('W')
}

const persons = [
  {
    name: 'Guilherme',
    age: 26,
    gender: gender.MAN
  },
  {
    name: 'Pedro',
    age: 43,
    gender: gender.MAN
  },
  {
    name: 'Ana',
    age: 18,
    gender: gender.WOMAN
  }
]

/* persons.forEach((person, index, arr) => {
  console.log(`Nome: ${person.name} index: ${index}`, arr);
}); */

const men = persons.filter(person => person.gender === gender.MAN);
//console.log('Lista apenas com os homens: ', men);

// Retorna um novo array com os objetos modificados
const personWithCourse = persons.map(person => {
  person.course = 'Introdução ao Javascript';
  return person;
}); 

// Reduce transforma o array em outro tipo
// age -> primeiro parâmetro é o novo tipo (variável) e ser retornado
// person -> segundo parâmetro é o objeto que vai iterar
const totalAge = persons.reduce((age, person) => {
  age += person.age;
  return age;
}, 0);
// Esse 0 no final é o valor inicial que o parâmetro age recebe
//console.log(totalAge);

// Juntando operações
// Filtra um array para obter um novo array, e usa o reduce para transformar esse array em um novo número
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0)
    .reduce((age, person) => {
      age += person.age;
      return age;
    }, 0);
//console.log('Soma de idades par: ', totalEvenAges);    

//-----------------------------
// DICAS ARITMÉTICAS
// console.log(typeof +"3"); // o +"3" faz um parseInt do 3

// console.log(typeof +true); // faz o parseInt do true p ele ser do tipo number ao invés de boolean

//-------------------------------
// COMPARAÇÃO
// Igual (==)
// true se os operandos sejam iguais
//var var1 = 3;
//console.log(var1 == '3');
//console.log(var1 == "3");

// Não igual (!=)
// true se os operandos não foram iguais
//var var1 = 3;
//console.log(var1 != "4");

// Estritamente igual (===)
// True se os operandos forem iguais e do mesmo tipo
//var var1 = 3;
//console.log(var1 === 3);

// Estritamente não igual (!==)
// True se os operandos não forem iguais e/ou não sejam do mesmo tipo

// Ternário
//console.log(true ? 'condição 1' : 'Condição 2');