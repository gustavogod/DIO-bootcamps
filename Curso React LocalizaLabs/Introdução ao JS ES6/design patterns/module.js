// Possibilita uma melhor organização do código, sem a necessidade de expor variáveis globais
// Dá para dividir os arquivos de acordo com as atribuições e depois importar 

let name = 'default';

function getName() {
    return name;
}

function setName(newName) {
    name = newName;
}

module.exports = {
    getName,
    setName
};
