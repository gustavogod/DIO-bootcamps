//obter dados de um arquivo json por meio de uma requisição
//obter os dados do json
// o .json transforma a stream em json
// o retorno das fetchs são promises
// o segundo parâmetro que pode ter no fetch são as configurações da requisição, que por padrão é um GET
fetch('http://localhost/Curso React LocalizaLabs/JS ES6 avançado/Promises e Fetch/data.json')
    .then(responseStream => {
        if (responseStream.status === 200) { // só vai passar de resposta for 200
            return responseStream.json();
        }
        else {
            throw new Error('Request error'); // tratar erros
        }
    }) // requisita o json e já retorna. Transforma em json
    .then(data => { // retorna e já pega os dados
        console.log(data);
    }).catch(err => { //APENAS ERROS DE REDE SÃO PEGOS NO CATCH
        console.log('Error:', err);
    });