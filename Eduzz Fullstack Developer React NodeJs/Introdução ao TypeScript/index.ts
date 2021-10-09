// types  -> Utilizado para fazer junções e merges das interfaces, para definir como serão utilizadas
// interfaces  -> definir contratos de estruturas de dados e de classe

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  //executarRugido(alturaEmDecibeis: number): void
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; 
// Estou definindo o tipo da minha estrutura de dados, que pode ser um ou outro

const animal: IDomestico = {
  nome: 'cachorro',
  tipo: 'terrestre',
  domestico: true,
  porte: 'medio', //propriedade definida na interface do ICanino
  //visaoNoturna: true, // -> Não deveria funcionar, pois é um atributo do felino, e já há um atributo do canino antes desse
  //executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

//----------------------------------------------------------------------------
//---------------SEGUNDA PARTE------------------------------------------------

// Por padrão, o typescript trata o elemento input como um elemento genérico, e não como um elemento HTML que está de fato na página
// Para isso, deve-se informar que o elemento é especificamente um elemento input da página -> as HTMLInputElement
// Assim, eu digo que o retorno de document.getElementById('input') retorna um HTMLInputElement
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
  // Evento que acontece quando algo está sendo digitado no input
  const i = event.currentTarget as HTMLInputElement; // Assim consigo acessar o atributo value
  //console.log(i.value);
});


//----------------------------------------------------------------------------
//---------------GENERIC TYPES------------------------------------------------

function adicionaApendiceALista<T>(array: T[], valor: T) {
  return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 1);

//----------------------------------------------------------------------------
//--Desenvolvendo condicionais a partir de parâmetros-------------------------

/* interface IUsuario {
  id: string;
  email: string;
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redireciona(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario){
    //Assim eu sei que o usuário é um Admin, pois a propriedade cargo só existe em IAdmin
  }
  
  // Se não, é usuário comum
} */


//----------------------------------------------------------------------------
//--VARIÁVEIS OPCIONAIS - Caracter ? para variáveis opcionais-----------------

interface IUsuario {
  id: string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
  // agora, cargo é um valor que pode ou não estar definido
  if (usuario.cargo) {
    // redirecionar(usuario.cargo);
  }
  //redirecionar para área do usuário
}

//----------------------------------------------------------------------------
//--VARIAVEIS READONLY E PRIVATE----------------------------------------------

interface Cachorro {
  readonly nome: string;
  readonly idade: number;
  readonly parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
  +readonly [K in keyof Cachorro]: Cachorro[K];
  //Estou iterando os items de Cachorro e definindo que serão apenas para leitura durante a implementação
  // -? remove os valor opcionais, como o parqueFavorito
  // o + é opcional, apenas para facilitar a leitura do código
}

class MeuCachorro implements CachorroSomenteLeitura {
  idade;
  nome;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

}

const cao = new MeuCachorro('Luna', 1);

cao.idade = 10;

console.log(cao);


//----------------------------------------------------------------------------
//--IMPORTANDO E EXTENDENDO BIBLIOTECAS EXTERNAS------------------------------

interface Estudante {
  name: string;
  idade: number;

}
interface Estudante {
  serie: string;
}

/* const estudante: Estudante = {
  //aqui, os atributos das duas definições de Estudante são somados
} */


//exemplo com jQuery
import $ from 'jquery';

$.fn.extend({
  novaFuncao() {
    console.log('Chamou nova função');
  }
});

//Quero adicionar a novaFuncao aos métodos nativos do jQuery, iso é feito o typings.d.ts

$('body').novaFuncao();


//----------------------------------------------------------------------------
//--USO DO OMIT PARA OMITIR ATRIBUTOS-----------------------------------------

interface Pessoa {
  nome: string;
  idade: number;
  nacionalidade: string;
}

//vai extender a interface Pessoa, mas omitir o atributo "nacionalidade"
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

}

// outros formas de trabalhar com tipos https://www.typescriptlang.org/docs/handbook/utility-types.html