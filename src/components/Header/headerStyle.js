import styled, { keyframes } from 'styled-components';

export const faultyFlicker = keyframes`
  0% {
    opacity: 0.1;
  }
  
`;

export const textFlicker = keyframes`

 
`;

export const borderFlicker = keyframes`
0% {
    box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange, 0 0 0.5em 0px orange;
  }
  50% {
    box-shadow: inset 0px 0px 0.6em 0px orange, 0px 0px 0.6em 0px orange, 0 0 0.6em 0px orange;
  }
  100% {
    box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange, 0 0 0.5em 0px orange;
  }
 
`;

export const pulseShadow = keyframes`
  0% {
    box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange, 0 0 0.5em 0px orange;
  }
  50% {
    box-shadow: inset 0px 0px 0.6em 0px orange, 0px 0px 0.6em 0px orange, 0 0 0.6em 0px orange;
  }
  100% {
    box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange, 0 0 0.5em 0px orange;
  }
`;

export const GlowingButtonContainer = styled.button`
  position: relative;
  color: black;
  cursor: pointer;
  border: 0.15em solid orange;
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: 'Sevillana', cursive;
  font-size: 2em;
  font-weight: 700;
  letter-spacing: 1em;

  -webkit-box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange;
  -moz-box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange;
  box-shadow: inset 0px 0px 0.5em 0px orange, 0px 0px 0.5em 0px orange;
  animation: ${borderFlicker} 2s linear infinite;

  &:hover {
    color: black;
    /* color: rgba(0, 0, 0, 0.8); */
    text-shadow: none;
    animation: ${pulseShadow} 1s linear infinite;
    scale: 1.025;
  }
`;

export const GlowingText = styled.span`
  font-size: 14px;
  float: left;
  margin-right: -0.8em;
  text-shadow: 0 0 0.125em hsl(30 100% 50% / 0.3), 0 0 0.45em orange;
  animation: ${textFlicker} 3s linear infinite;
`;

export const FaultyLetter = styled.span`
  opacity: 0.5;
  animation: ${faultyFlicker} 2s linear infinite;
`;

export const FaultyLetter2 = styled.span`
  opacity: 0.5;
  animation: ${faultyFlicker} 2.5s linear infinite;
`;
