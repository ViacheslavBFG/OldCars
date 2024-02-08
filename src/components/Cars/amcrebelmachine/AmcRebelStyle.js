import styled, { keyframes } from 'styled-components';
import BcOld from '../../../styles/img/bcg/bcOld2.jpg';

const colorShift = keyframes`
 0% {
    opacity: 0.50;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;
export const MainContainer = styled.div`
  background-image: url(${BcOld});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100vw;
  padding-top: 30px;
  /* margin: 0;
  padding: 0; */
  overflow: hidden;
  animation: ${colorShift} 1s ease-in-out alternate;
`;

export const PositionContainer = styled.div`
  font-size: 20px;
`;

export const TitleFacts = styled.h2`
  text-align: center;
  font-size: 30px;
`;

export const TextContainer = styled.div`
  margin: 20px;
  overflow: hidden;
  @media (max-width: 1430px) {
    margin-top: 60px;
  }
`;

export const HeaderDiv = styled.div`
  position: absolute;
  left: 8%;
  top: 5%;

  @media (max-width: 1430px) {
    left: 50%;
    top: 5%;
  }
`;

export const ImgOne = styled.img`
  width: 440px;
  border-radius: 15px;

  .float-img {
    float: right;
    margin: 0 0 10px 10px;
  }

  @media (max-width: 490px) {
    width: 100%;
  }
`;

export const ImgTwo = styled.img`
  width: 500px;
  border-radius: 15px;

  .float-img {
    float: right;
    margin: 0 0 10px 10px;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Span = styled.span`
  font-weight: bold;
`;
// ---div facts

export const FactOneDiv = styled.div``;
export const FactTwoDiv = styled.div``;
export const FactThreeDiv = styled.div``;

// --- P facts

export const ParagraphFactOne = styled.p`
  line-height: 1.5;
`;
export const ParagraphFactTwo = styled.p`
  line-height: 1.5;
`;
export const ParagraphFactThree = styled.p`
  line-height: 1.5;
`;