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
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImageContainer = styled.div`
  width: 450px;
  height: 290px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;
export const BtnCar = styled.button``;
