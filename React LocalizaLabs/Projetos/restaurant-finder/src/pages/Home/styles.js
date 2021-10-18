import styled from 'styled-components';
import Slider from 'react-slick';
// Wrapper para englobar a navegação lateral e a área do mapa 
export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

//Barra de navegação lateral
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh; //100% do tamanho da viewport
    overflow-y: auto; //Assim, o conteúdo que estrapolar verticalmente pode ser scrollado pelo usuário
`;

//Área lateral superior contendo: A logo, o input de texto para pesquisa, e um slide de restaurantes
export const Search = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #ffffff;
    padding: 16px;
`;

export const ImgLogo = styled.img`
    width: 50%;
    align-self: center;
    max-width: 100%;
    height: auto;
    margin-bottom: 15px;
`;

export const Map = styled.div`
  background-color: red;
  width: 500px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  font-size: 24px;
  font-weight: bold;
  line-height: 29px;
  margin: 16px 0;
`;