import styled from 'styled-components';

//A modal gerlamente fica centralizada na tela, com o ambiente ao redor ofuscado
//Essa área ofuscada ao redor, completando a viewport, é o Overlay

export const Overlay = styled.div`
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex; //Para lidar com a modal que vai estar dentro do overlay
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background-color: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px); //Usada para se ter um desfoque do fundo que está além da cor que foi colocada no background do overlay

  z-index: 999;
`;

export const Dialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 144px); //100% do elemento pai - 144px
  width: 500px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);
  border-radius: 8px;
`;