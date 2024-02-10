import React from 'react';
import Header from '../../Header/header';
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
import { Link } from 'react-router-dom';
import { EngDiv, HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';
import Engine from 'components/Engine/engine';

const PontiacFirebird = () => {
  const enginesData = [
    {
      title: '230 cu in (3.8 L) Straight-6:',
      description: `Serving as the base engine option for the Firebird, this inline-six provided modest performance and fuel efficiency. It typically produced around 140 horsepower and 220 lb-ft of torque, offering reliability and affordability for everyday driving.`,
    },
    {
      title: '250 cu in (4.1 L) Straight-6:',
      description: `Another inline-six engine option, the 250 cubic inch variant offered slightly more power than the base engine, with approximately 155 horsepower and 235 lb-ft of torque. It provided a balance of performance and efficiency suitable for daily driving.`,
    },
    {
      title: '326 cu in (5.3 L) V8:',
      description: `The 326 V8 was one of the smaller V8 engine options available for the Firebird. It produced around 250 horsepower and 350 lb-ft of torque, offering improved performance over the inline-six engines while still providing a smooth and manageable driving experience.`,
    },
    {
      title: '350 cu in (5.7 L) V8:',
      description: `A popular choice among Firebird buyers, the 350 V8 offered a good balance of power and drivability. With outputs ranging from approximately 265 to 325 horsepower and 355 to 380 lb-ft of torque, depending on the specific variant and tuning, it provided smooth acceleration and ample low-end torque.`,
    },
    {
      title: '400 cu in (6.6 L) V8:',
      description: ` The 400 V8 was one of the higher-performance engine options available for the Firebird. It delivered impressive horsepower figures, ranging from around 330 to 335 horsepower and 430 to 445 lb-ft of torque, making it suitable for high-speed cruising and spirited driving.`,
    },
    {
      title: '428 cu in (7.0 L) V8:',
      description: `The 428 V8, also known as the "Big Block," was the top-of-the-line performance option for the Firebird. It produced staggering horsepower figures, ranging from approximately 360 to 390 horsepower, and massive torque, making it a dominant force on the road and the drag strip.`,
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
            Three interesting facts about the first-generation Pontiac Firebird:
          </TitleFacts>
          <PositionContainer>
            <ImgOne
              src={Pontiac3}
              alt=""
              align="left"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
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
            <ImgTwo
              src={Pontiac2}
              alt=""
              align="right"
              vspace="5"
              hspace="5"
              loading="lazy"
            />{' '}
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
