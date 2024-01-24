import styled from 'styled-components';
import BcgUSA from '../../styles/img/bcg/bcgUSA.jpg';

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${BcgUSA});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
`;

export const FrameDiv = styled.div`
  margin: 50px 30px 0;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 450px;
  margin: 10px;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
`;

export const Label = styled.label``;

export const Span = styled.span`
  height: 25px;
  color: black;
  background-color: white;
  text-align: center;
  justify-content: center;
  display: flex;
  align-items: center;
`;
