//CRIANDO ARRAYS

const arr = [1, 2, 3];
const arr = new Array(1, 2, 3);
const arr = Array.of(1, 2, 'Também aceita strings');

//Se passar só um parâmetro, ele cria vetor vazio de n posições de acordo com o número passado
const arr = Array(3); // [empty x 3]
const arr = Array(3, 2); // Assim, cria um array normal [3, 2]

//Array.from
// Cria uma nova instância de array a partir de um parâmetro array-like ou iterable object
const divs = document.querySelectorAll('div'); // coleta em divs, que é do tipo NodeList, todos os elementos div da página
const divArray = Array.from(divs); // Agora divs foi convertido para um array

//----------------
// INSERIR ELEMENTOS NO ARRAY
// push -> insere elemento no final e retorna o tamanho do array
const frutas = ['uva', 'pêra', 'mamão'];
frutas.push('laranja'); // retorna 4

//-------------------
// REMOVER ELEMENTO DO FINAL DO ARRAY
// pop -> remove e retorna o elemento removido
frutas.pop(); // laranja

//--------------------
// ADICIONAR ELEMENTO NO INÍCIO E RETORNA O TAMANHO DO ARRAY
// unshift
frutas.unshift('banana');

//---------------------
// REMOVE ELEMENTO DO INÍCIO DO ARRAY E RETORNA O ELEMENTO REMOVIDO
// shift
frutas.shift();

//-----------------------
// CONCATENAR ARRAYS E RETORNAR UM NOVO ARRAY
// concat
// o concat não altera os arrays utilizados, mas cria um novo
frutas.concat(['maçã', 'limão']);

//-------------------------
// DIVIDIR ARRAYS
// não altera o array, é imutável
// slice
const arr = [1, 2, 3, 4, 5];

// se tiver 2 parâmetros, então vai do primeiro até a posição anterior do último índice
arr.slice(0, 2); // [1, 2]

// se tiver 1 parâmetro, então pega da posição do índice adiante
arr.slice(2); // [3, 4, 5]

// se o parâmetro for negativo, ele pega o índice começando do final do array
arr.slice(-1); // [5]
arr.slice(-3); // [3, 4, 5]
arr.slice(-3, -1); // [3, 4]


//-------------------------------
// ALTERAR ARRAY
// splice -> adiciona novos elementos enquanto remove elementos antigos
// retorna os elementos removidos
// não é imutável

arr.splice(2); // remove os items e partir da posição 2 e retorna os items removidos
// [3, 4, 5]

// primeiro parâmetro indica que vai ir na primeira posição
// segundo parâmetro em 0 indica que não é para remover o elemento
// o segundo parâmetro indica quantos elementos devem ser removidos a partir do índice do primeiro parâmetro
// insere 'first' na primeira posição
arr.splice(0, 0, 'first'); // []