import styled, { keyframes } from 'styled-components';
const bounceAnimation = keyframes`
  0% { top: 0em; }
  40% { top: 0em; }
  43% { top: -0.9em; }
  46% { top: 0em; }
  48% { top: -0.4em; }
  50% { top: 0em; }
  100% { top: 0em; }
`;

export const EDiv = styled.div``;

export const Btn = styled.button`
  @media (max-width: 570px) {
    font-size: 18px;
  }
  color: black;
  background-color: orange;
  border-radius: 15px;
  position: relative;
  animation: ${bounceAnimation} 4s infinite linear;
  background-color: 2px solid black;
`;
