import React, { useEffect, useRef, useState } from 'react';

function App() {

  const inputRef = useRef();
  const count = useRef(1);
  const [ , setValue] = useState(false);

  //o useRef não causa o re-render da aplicação
  const handleClick = () => {
    inputRef.current.focus();
    console.log('inputRef.current', inputRef.current);
  }

  //Ele não renderizou novamente, mesmo com o count tendo o valor alterado
  //Isso é bom quando deve-se tratar uma atualização de alguma propriedade antes de tomar alguma ação
  //Isto é, quando deseja-se que a alteração de alguma propriedade não cause o re-render
  //Com o setState aí a renderização ocorre
  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui');
      count.current = 300;
      setValue(true); // agora o re-render acontece
    }, 3000)
  })
  

  return (
    <>
      <h1>Valor do count: {count.current}</h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <button onClick={handleClick}>Focar</button>
    </>
  );
}

export default App;
