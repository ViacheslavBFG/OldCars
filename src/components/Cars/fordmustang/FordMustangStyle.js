import styled, { keyframes } from 'styled-components';
import BcOld from '../../../styles/img/bcg/bcOld2.jpg';

const rotateFadeIn = keyframes`
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
  margin: 0;
  padding-top: 30px;
  overflow: hidden;
  animation: ${rotateFadeIn} 1s ease;
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

export const ImgOne = styled.img`
  width: 437px;
  border-radius: 15px;
  .float-img {
    float: right;
    margin: 0 0 10px 10px;
  }
  @media (max-width: 500px) {
    max-width: 100%;
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
