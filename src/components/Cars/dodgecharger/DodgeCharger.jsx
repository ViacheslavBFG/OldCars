import React from 'react';

import Dodge2 from '../../../styles/img/1969/dodgecharger/dodgecharger2.jpg';
import Dodge3 from '../../../styles/img/1969/dodgecharger/dodgecharger3.jpg';
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
  Span,
} from './DodgeChargerStyle';

const DodgeCharger = () => {
  return (
    <>
      <MainContainer>
        <TextContainer>
          <TitleFacts>
            Three interesting facts about the first-generation Dodge Charger:
          </TitleFacts>
          <PositionContainer>
            <ImgOne src={Dodge2} alt="" align="left" vspace="5" hspace="5" />
            <FactOneDiv>
              <ParagraphFactOne>
                <Span>Fastback Design:</Span> The first-generation Dodge
                Charger, introduced in 1966, featured a distinctive fastback
                design. This design, with its sleek and aerodynamic roofline,
                set the Charger apart from other muscle cars of its time. The
                fastback styling not only contributed to the Charger's unique
                appearance but also hinted at its high-performance capabilities.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                <Span>Hidden Headlights:</Span> The 1966 and 1967 models of the
                first-generation Charger were equipped with a unique feature –
                hidden headlights. The headlights were concealed behind
                electrically operated rotating doors in the front grille. This
                feature not only added a touch of sophistication to the car's
                design but also contributed to improved aerodynamics when the
                headlights were not in use.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgOne src={Dodge3} alt="" align="right" vspace="5" hspace="5" />{' '}
            <FactThreeDiv>
              <ParagraphFactThree>
                <Span>Performance Variants:</Span> The first-generation Dodge
                Charger offered a range of performance-oriented variants,
                catering to different preferences and driving styles. One
                notable model was the Charger R/T (Road/Track), introduced in
                1968. The R/T featured a powerful 440 cubic-inch Magnum V8
                engine, heavy-duty suspension, and distinctive badging. This
                variant further solidified the Charger's reputation as a
                high-performance muscle car and contributed to its popularity
                among enthusiasts.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default DodgeCharger;
