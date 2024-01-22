import { createGlobalStyle } from 'styled-components';
import Bcg from './img/bcg/bcg1.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-image: url(${Bcg});
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed; 
    height: 100vh; 
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff; 
  font-family: 'Sevillana', cursive;
  }
`;

export default GlobalStyle;
