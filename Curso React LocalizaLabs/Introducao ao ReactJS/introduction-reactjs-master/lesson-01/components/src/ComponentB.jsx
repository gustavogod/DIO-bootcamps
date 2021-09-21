import React from 'react'

function ComponenteB(props) {
  return (
    <div>Componente B =D {props.children} </div>
  )
}

/* Se não usar a propriedade children, outros componentes que estiverem dentro do 
componente B não serão renderizados */

export default ComponenteB
