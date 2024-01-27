import React from 'react';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Camaro1 from '../../../styles/img/1969/chevroletcamaro/chevroletcamaro1.jpg';
import Camaro2 from '../../../styles/img/1969/chevroletcamaro/chevroletcamaro2.jpg';
import Camaro3 from '../../../styles/img/1969/chevroletcamaro/chevroletcamaro3.jpg';
import {
  MainContainer,
  TextContainer,
  ImgOne,
  TitleFacts,
  FactOneDiv,
  FactTwoDiv,
  FactThreeDiv,
  ParagraphFactOne,
  ParagraphFactTwo,
  ParagraphFactThree,
  PositionContainer,
} from './ChevroletCamaroStyle';

const ChevroletCamaro = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <TitleFacts>
            Here are three interesting facts about the first-generation
            Chevrolet Camaro:
          </TitleFacts>
          <PositionContainer>
            <ImgOne src={Camaro2} alt="" align="left" vspace="5" hspace="5" />
            <FactOneDiv>
              <ParagraphFactOne>
                Competition with the Ford Mustang: The Chevrolet Camaro was
                introduced in direct response to the success of the Ford
                Mustang. Ford had achieved considerable success with the Mustang
                since its introduction in 1964, and Chevrolet aimed to capture a
                share of the pony car market. The Camaro was Chevrolet's answer
                to the Mustang, and both cars have since become iconic symbols
                of American muscle cars.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                Z/28 Performance Package: The Z/28 is a high-performance option
                package that became synonymous with the Camaro. Introduced in
                1967, the Z/28 was designed for SCCA (Sports Car Club of
                America) Trans-Am racing. It featured a 302 cubic-inch V8 engine
                (a special high-revving small-block), a heavy-duty suspension,
                and other performance enhancements. The Z/28 became one of the
                most sought-after and respected versions of the Camaro.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgOne src={Camaro3} alt="" align="right" vspace="5" hspace="5" />{' '}
            <FactThreeDiv>
              <ParagraphFactThree>
                Yenko Camaro: Don Yenko, a Chevrolet dealer and performance
                enthusiast, played a significant role in the Camaro's
                high-performance legacy. Yenko realized the potential for even
                more power, and in 1967, he started offering the Yenko Super
                Camaro through his dealership. These modified Camaros featured a
                427 cubic-inch V8 engine, upgraded suspension, and other
                enhancements. Yenko Camaros are rare and highly sought after by
                collectors.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default ChevroletCamaro;
