import React from 'react';
import PetShop from './PetShop'

function App() {

  const handleClick = () => {
    console.log('Iniciando banho...');
  }

  return (
    <PetShop
      customerName='Gustavo Dias'
      onClick={handleClick}
      status='Completed'
    />
  );
}

export default App;
