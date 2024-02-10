import React from 'react';
import Header from '../../Header/header';
import Ford2 from '../../../styles/img/1969/fordmustang/fordmustang2.jpg';
import Ford3 from '../../../styles/img/1969/fordmustang/fordmustang3.jpg';
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
} from './FordMustangStyle';
import { Link } from 'react-router-dom';
import { EngDiv, HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';
import Engine from 'components/Engine/engine';

const FordMustang = () => {
  const enginesData = [
    {
      title: '170 cu in (2.8 L) Straight-6:',
      description: `This inline-six engine served as the base option for the Mustang. It provided modest performance and fuel efficiency, producing around 101 horsepower and 156 lb-ft of torque. While not particularly powerful, it offered reliability and affordability.`,
    },
    {
      title: '200 cu in (3.3 L) Straight-6:',
      description: `Another inline-six engine option, the 200 cubic inch variant offered slightly more power than the base engine, with approximately 120 horsepower and 190 lb-ft of torque. It provided a good balance of performance and efficiency for everyday driving.`,
    },
    {
      title: '260 cu in (4.3 L) V8: ',
      description: `The 260 V8 was one of the smaller V8 engine options available for the Mustang. It produced around 164 horsepower and 258 lb-ft of torque, offering improved performance over the inline-six engines while still providing a smooth and manageable driving experience.`,
    },
    {
      title: '289 cu in (4.7 L) V8:  ',
      description: `One of the most iconic and widely used engine options for the first-generation Mustang, the 289 V8 offered a good balance of power and drivability. With outputs ranging from approximately 200 to 271 horsepower and 282 to 312 lb-ft of torque, depending on the specific variant and tuning, it provided smooth acceleration and ample low-end torque.`,
    },
    {
      title: '302 cu in (5.0 L) V8:',
      description: ` Introduced later in the first-generation Mustang's production cycle, the 302 V8 became another popular engine choice among enthusiasts. It offered improved performance over the 289, with outputs ranging from around 220 to 290 horsepower and 300 to 325 lb-ft of torque, depending on the configuration.`,
    },
    {
      title: '390 cu in (6.4 L) V8: ',
      description: `The 390 V8 was one of the higher-performance engine options available for the Mustang. It delivered impressive horsepower figures, ranging from approximately 275 to 325 horsepower and 380 to 427 lb-ft of torque, making it suitable for high-speed cruising and spirited driving.`,
    },
    {
      title: '427 cu in (7.0 L) V8:  ',
      description: `The 427 V8, also known as the "427 Side-Oiler," was a high-performance engine option primarily used in the Shelby GT500 variants of the Mustang. It produced staggering horsepower figures, ranging from around 390 to 425 horsepower, and massive torque, making it a dominant force on the race track and the street.`,
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
            Three interesting facts about the first-generation Ford Mustang:
          </TitleFacts>
          <PositionContainer>
            <ImgOne
              src={Ford2}
              alt=""
              align="left"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
            <FactOneDiv>
              <ParagraphFactOne>
                <Span>Pony Car Segment Pioneer:</Span> The Ford Mustang is often
                credited with creating the "pony car" segment. The term "pony
                car" refers to affordable, compact, and stylish sports cars with
                a long hood and short rear deck. The Mustang's success prompted
                other automakers to develop their own versions of pony cars. The
                Mustang's impact on the automotive industry was so significant
                that it inspired competitors like Chevrolet Camaro and Dodge
                Challenger, leading to the development of a whole new category
                of American muscle cars.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                <Span>Introduction at the New York World's Fair:</Span> The Ford
                Mustang was officially introduced to the public on April 17,
                1964, at the New York World's Fair. It was a significant and
                strategic launch that generated a massive amount of publicity.
                Ford cleverly marketed the Mustang as a car for the younger
                generation, promoting it as a stylish and affordable vehicle.
                The response was overwhelming, and the Mustang quickly became an
                iconic symbol of the 1960s American automotive culture.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgOne
              src={Ford3}
              alt=""
              align="right"
              vspace="5"
              hspace="5"
              loading="lazy"
            />{' '}
            <FactThreeDiv>
              <ParagraphFactThree>
                <Span>Mustang GT and Shelby GT350:</Span> Ford introduced the
                Mustang GT (Grand Touring) in 1965, catering to those seeking a
                more performance-oriented driving experience. The GT package
                included a larger engine, upgraded suspension, and other
                enhancements. In the same year, legendary automotive designer
                Carroll Shelby collaborated with Ford to create the
                high-performance Shelby GT350 variant. The GT350 was a
                track-focused Mustang with a modified V8 engine, performance
                suspension, and distinctive racing stripes, solidifying the
                Mustang's reputation as a potent muscle car.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default FordMustang;
