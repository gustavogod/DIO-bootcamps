import React from 'react'

function ComponenteA(props) {
  return (
    <div>Componente A =D
      <div>{props.children}</div>
      </div>
  )
}

/* Se não usar a propriedade children, outros componentes que estiverem dentro do 
componente A não serão renderizados */

export default ComponenteA
