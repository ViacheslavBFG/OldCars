import styled, { keyframes } from 'styled-components';
import bcgUSA from '../../styles/img/bcg/bcgUSA.jpg';
import { Link } from 'react-router-dom';

const fadeIn = keyframes`

 from {
  opacity:0.25;
    
    
  }
  to {
    opacity:1;
    
  }
`;

export const MainDiv = styled.div`
  min-height: 100vh;
  background-image: url(${bcgUSA});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  justify-content: center;
  display: flex;
  animation: ${fadeIn} 2s ease-out;
`;

export const ImgContainer = styled.div`
  transition: filter 0.3s ease-in-out;

  &:hover {
    filter: brightness(120%);
  }
`;
export const Label = styled.label`
  background-color: white;
  text-align: center;
  border: 2px solid black;
  border-radius: 15px;
  cursor: pointer;
`;

export const Span = styled.span``;

export const ImgCars = styled.img`
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
export const LinkStyle = styled(Link)`
  color: black;
`;
