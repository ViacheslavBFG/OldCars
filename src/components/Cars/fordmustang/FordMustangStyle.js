import styled from 'styled-components';
import BcOld from '../../../styles/img/bcg/bcOld2.jpg';

export const MainContainer = styled.div`
  background-image: url(${BcOld});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
`;

export const ImgOne = styled.img`
  width: 437px;
  border-radius: 15px;
  .float-img {
    float: right; /* Float the image to the right */
    margin: 0 0 10px 10px; /* Add margin to create space between text and image */
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
