import React from 'react';
import Header from '../../Header/header';
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
import { Link } from 'react-router-dom';
import { EngDiv, HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';
import Engine from 'components/Engine/engine';

const DodgeCharger = () => {
  const enginesData = [
    {
      title: '225 cu in (3.7 L) Straight-6:',
      description: `This inline-six engine served as the base option for the Dodge Charger. It provided decent performance and fuel efficiency, producing around 145 horsepower and 215 lb-ft of torque. While not particularly powerful, it offered reliability and affordability.`,
    },
    {
      title: '273 cu in (4.5 L) V8:',
      description: `The 273 V8 was a small-block engine option for the Charger, offering improved performance over the base inline-six. It generated approximately 180 horsepower and 260 lb-ft of torque, providing a good balance of power and efficiency for daily driving.`,
    },
    {
      title: '318 cu in (5.2 L) V8:',
      description: `Another popular choice for the Dodge Charger, the 318 V8 offered increased power and torque compared to the smaller engines. Producing around 230 horsepower and 340 lb-ft of torque, it delivered solid acceleration and smooth performance.`,
    },
    {
      title: '383 cu in (6.3 L) V8: ',
      description: `This mid-range V8 engine option provided a significant bump in power over the smaller engines. With outputs ranging from approximately 290 to 330 horsepower and 425 to 425 lb-ft of torque, depending on the specific variant, it offered strong acceleration and ample low-end torque.`,
    },
    {
      title: '440 cu in (7.2 L) V8:',
      description: `The 440 V8, also known as the Magnum, was one of the high-performance engine options available for the Dodge Charger. It delivered impressive horsepower figures, ranging from around 375 to 390 horsepower, and substantial torque, making it suitable for high-speed cruising and drag racing.`,
    },
    {
      title: '426 cu in (7.0 L) V8 HEMI:',
      description: `The legendary HEMI engine was the top-of-the-line performance option for the Dodge Charger. Known for its hemispherical combustion chambers and exceptional power output, the 426 HEMI produced staggering horsepower figures, ranging from approximately 425 to 425 horsepower, and massive torque, making it a dominant force on the race track and the street.`,
    },
  ];
  return (
    <>
      <MainContainer>
        <Link to="/gallery">
          <HeaderDiv>
            <Header />
          </HeaderDiv>
        </Link>

        <TextContainer>
          <TitleFacts>
            <EngDiv>
              {' '}
              <Engine enginesData={enginesData} />
            </EngDiv>
            Three interesting facts about the first-generation Dodge Charger:
          </TitleFacts>
          <PositionContainer>
            <ImgOne
              src={Dodge2}
              alt=""
              align="left"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
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
            <ImgOne
              src={Dodge3}
              alt=""
              align="right"
              vspace="5"
              hspace="5"
              loading="lazy"
            />{' '}
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
