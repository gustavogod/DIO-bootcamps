// Checar se algum item está em outro item

//Arrays
var nums = new Array("um", 'dois', 'três', 'quatro');
// checar se existe o índice
0 in nums; // true
3 in nums; // true
4 in nums; // false
// para comparar se item existe, tem q especificar o número do indice
// 'um' in nums[0]; não roda, pois tem q ser o número do índice e não o item q tem no índice
"length" in nums; // true, pois length é uma propriedade de nums
//console.log('length' in nums); // tanto faz aspas duplas ou simples

// Verificar se a propriedade existe no objeto
var carro = {marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in carro; // true
//console.log("marca" in carro);

//--------------------
// Verifica se é uma instância de um determinado tipo de objeto
// objeto instanceof tipoObjeto
var dia = new Date(2019, 12, 17);
dia instanceof Date; // true
//console.log(dia instanceof Date);