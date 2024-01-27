import styled, { keyframes } from 'styled-components';
import Bcg from '../../styles/img/bcg/bcg1.jpg';

import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const BorderBlink = keyframes`
  0%{
    border-color:white
  }
   50% {
    border-color:transparent
  }
  100% {
    border-color:white
  }
`;
const PrintedText = keyframes`
 from{
  width:0
 }
 `;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${Bcg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const HeaderTitle = styled.h1`
  color: wheat;
  width: 40ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 4px solid white;
  animation: ${BorderBlink} 0.75s step-end infinite, ${PrintedText} 5s steps(40);
  margin-top: 450px;
`;
