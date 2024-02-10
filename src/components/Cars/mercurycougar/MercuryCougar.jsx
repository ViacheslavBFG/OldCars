import React from 'react';
import Header from '../../Header/header';
import Mercury2 from '../../../styles/img/1969/mercurycougar/mercurycougar2.jpg';
import Mercury3 from '../../../styles/img/1969/mercurycougar/mercurycougar3.jpg';
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
} from './MercuryCougarStyle';
import { Link } from 'react-router-dom';
import { EngDiv, HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';
import Engine from 'components/Engine/engine';

const MercuryCougar = () => {
  const enginesData = [
    {
      title: '200 cu in (3.3 L) Straight-6: ',
      description: `Similar to the base engine option for the Ford Mustang, this inline-six engine provided modest performance and fuel efficiency. It produced around 120 horsepower and 190 lb-ft of torque, offering reliability and affordability for everyday driving.`,
    },
    {
      title: '289 cu in (4.7 L) V8:',
      description: `As with the Mustang, the 289 V8 was one of the primary engine options for the Cougar. It offered a good balance of power and drivability, with outputs ranging from approximately 200 to 271 horsepower and 282 to 312 lb-ft of torque, depending on the specific variant and tuning.`,
    },
    {
      title: '302 cu in (5.0 L) V8:',
      description: `Introduced later in the Cougar's production cycle, the 302 V8 provided improved performance over the 289. With outputs ranging from around 220 to 290 horsepower and 300 to 325 lb-ft of torque, it offered smooth acceleration and ample low-end torque.`,
    },
    {
      title: '351 cu in (5.8 L) V8:',
      description: `The 351 V8, also known as the Windsor, was a higher-performance engine option available for the Cougar. It delivered impressive horsepower figures, ranging from approximately 250 to 300 horsepower and 350 to 380 lb-ft of torque, making it suitable for spirited driving and highway cruising.`,
    },
    {
      title: '390 cu in (6.4 L) V8: ',
      description: `The 390 V8 was one of the larger and more powerful engine options offered for the Cougar. With outputs ranging from around 270 to 325 horsepower and 378 to 427 lb-ft of torque, it provided robust performance and effortless acceleration, particularly in the heavier XR-7 models.`,
    },
    {
      title: '427 cu in (7.0 L) V8:',
      description: `Similar to the Mustang, the 427 V8 was a high-performance engine primarily used in special variants of the Cougar, such as the GT-E. It produced impressive horsepower figures, ranging from approximately 390 to 425 horsepower, and massive torque, making it a formidable competitor on the road and the track.`,
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
            Three interesting facts about the first-generation Mercury Cougar:
          </TitleFacts>
          <PositionContainer>
            <ImgOne
              src={Mercury3}
              alt=""
              align="left"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
            <FactOneDiv>
              <ParagraphFactOne>
                <Span>Introduction as a Luxury Pony Car:</Span> The Mercury
                Cougar was introduced by the Lincoln-Mercury division of Ford in
                1967 as a luxury pony car. Positioned as a more upscale and
                refined version of the Ford Mustang, the Cougar shared the same
                platform but featured unique styling elements and additional
                comfort and luxury features. The Cougar aimed to attract a more
                mature and affluent audience compared to the Mustang's youthful
                image.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                <Span>Sequential Turn Signals:</Span> The first-generation
                Mercury Cougar was one of the first production cars to feature
                sequential turn signals. Instead of the traditional simultaneous
                blinking of all the rear lights, the Cougar's turn signals
                blinked in sequence from the inside to the outside, creating a
                distinctive and stylish visual effect. This feature became a
                signature element of the Cougar's design and contributed to its
                overall appeal.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgOne
              src={Mercury2}
              alt=""
              align="right"
              vspace="5"
              hspace="5"
              loading="lazy"
            />{' '}
            <FactThreeDiv>
              <ParagraphFactThree>
                <Span>Dan Gurney Special:</Span> In 1967, Mercury introduced a
                special edition of the Cougar known as the "Dan Gurney Special."
                Named after the renowned race car driver Dan Gurney, this
                edition featured a distinctive louvered hood, special badging,
                and other performance-oriented enhancements. It was available
                with various engine options, including the powerful 390
                cubic-inch V8. The Dan Gurney Special aimed to capitalize on
                Gurney's racing success and added a touch of performance flair
                to the Cougar lineup.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default MercuryCougar;
