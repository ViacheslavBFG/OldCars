import styled, { keyframes } from 'styled-components';
import Bcg from '../../styles/img/bcg/bcg1.jpg';

import { Link } from 'react-router-dom';
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;



const fadeIn = keyframes`
from {
  filter: contrast(4);
}
to {
  filter: contrast(1);
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
  animation: ${fadeIn} 2s ease;
`;

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const HeaderTitle = styled.h1`
  color: wheat;
  margin-top: 490px;
  opacity: 0;
  animation: ${fadeInAnimation} 4s ease-in-out forwards;
`;
