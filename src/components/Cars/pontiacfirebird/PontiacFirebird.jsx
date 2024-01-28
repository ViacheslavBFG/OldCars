import React from 'react';

import Pontiac2 from '../../../styles/img/1969/pontiacfirebird/pontiacfirebird2.jpg';
import Pontiac3 from '../../../styles/img/1969/pontiacfirebird/PontiacFirebird4.jpg';
import {
  MainContainer,
  TextContainer,
  ImgOne,
  ImgTwo,
  TitleFacts,
  FactOneDiv,
  FactTwoDiv,
  FactThreeDiv,
  ParagraphFactOne,
  ParagraphFactTwo,
  ParagraphFactThree,
  PositionContainer,
  Span,
} from './PontiacFirebirdStyle';

const PontiacFirebird = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <TitleFacts>
            Three interesting facts about the first-generation Pontiac Firebird:
          </TitleFacts>
          <PositionContainer>
            <ImgOne src={Pontiac3} alt="" align="left" vspace="5" hspace="5" />
            <FactOneDiv>
              <ParagraphFactOne>
                <Span>Shared Platform with the Chevrolet Camaro:</Span> The
                first-generation Pontiac Firebird, introduced in 1967, shared
                its platform with the Chevrolet Camaro. General Motors designed
                these sister models to compete in the same pony car market
                segment. While they had similar underpinnings, each brand gave
                its model a unique identity through styling and performance
                options. The Firebird was Pontiac's entry into the growing
                market for compact, sporty cars.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                <Span>Influence of the Pontiac Banshee Concept:</Span> The
                design of the first-generation Pontiac Firebird was influenced
                by the Pontiac Banshee concept cars. The Pontiac Banshee, a
                series of concept vehicles developed in the mid-1960s, showcased
                Pontiac's exploration of the sports car market. While the
                Banshee itself did not go into production, many of its design
                elements and styling cues found their way into the production
                version of the Firebird.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgTwo src={Pontiac2} alt="" align="right" vspace="5" hspace="5" />{' '}
            <FactThreeDiv>
              <ParagraphFactThree>
                <Span>Trans Am Performance Package:</Span> The Pontiac Firebird
                Trans Am, introduced in 1969, was a high-performance variant
                that later became iconic in the muscle car world. Named after
                the Trans Am Series in motorsports, the Trans Am package
                included performance upgrades such as a Ram Air intake system, a
                functional "shaker" hood scoop, and distinctive graphics. The
                Trans Am was available with various V8 engines, offering a
                powerful and aggressive driving experience. The Firebird Trans
                Am played a significant role in establishing Pontiac's presence
                in the performance car market.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default PontiacFirebird;
