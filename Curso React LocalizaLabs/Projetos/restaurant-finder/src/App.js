import React from 'react';
//Assim, o theme.js pode ser passado para onde precisar na aplicação
import { ThemeProvider } from 'styled-components';
//Usar o pacote styled-reset para padronizar automaticamente configurações padrão de estilização nos navegadores
import { Reset } from 'styled-reset';


import Home from './pages/Home'
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
