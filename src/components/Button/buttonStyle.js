import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Btn = styled.button`
  border: none;
  font-weight: bold;
  font-size: 20px;
  font-family: 'Sevillana', cursive;
  cursor: pointer;
  display: block;
  opacity: 0;
  animation: ${fadeIn} 3s ease-in-out forwards;
  width: 200px;
  height: 40px;
  background-color: transparent;
  border-radius: 5px;
  color: wheat;
  border: 2px solid #f39c12;
  box-shadow: 0 0 20px 5px rgba(243, 156, 18, 0.5);
  animation: blink 1s infinite;

  @keyframes blink {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  &:hover {
    scale:1.1;
    
  }
  &:active{
    scale:1.2;
  }
`;
