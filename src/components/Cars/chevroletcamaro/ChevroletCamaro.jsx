import React from 'react';
import Header from '../../Header/header';
import Camaro2 from '../../../styles/img/1969/chevroletcamaro/chevroletcamaro2.jpg';
import Camaro3 from '../../../styles/img/1969/chevroletcamaro/chevroletcamaro3.jpg';
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
} from './ChevroletCamaroStyle';
import { Link } from 'react-router-dom';
import { EngDiv, HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';
import Engine from 'components/Engine/engine';

const ChevroletCamaro = () => {
  const enginesData = [
    {
      title: '230 cu in (3.8 L) Straight-6:',
      description: `This was the base engine option for the Camaro. It was a reliable inline-six engine, producing around 140 horsepower and 220 lb-ft of torque. This engine provided decent performance and fuel efficiency.`,
    },
    {
      title: '250 cu in (4.1 L) Straight-6:',
      description: `Another inline-six engine option, the 250 cubic inch variant offered slightly more power than the base engine, with approximately 155 horsepower and 235 lb-ft of torque. It provided a balance between performance and efficiency.`,
    },
    {
      title: '283 cu in (4.6 L) V8:',
      description: `The smallest V8 engine option available for the first-generation Camaro, the 283 V8 produced around 195 horsepower and 285 lb-ft of torque. It offered improved performance compared to the inline-six engines, with a smooth power delivery.`,
    },
    {
      title: '302 cu in (4.9 L) V8:',
      description: `This high-performance V8 engine was specifically designed for Camaro's performance-oriented models like the Z/28. It delivered approximately 290 horsepower and 290 lb-ft of torque, making it a favorite among enthusiasts for its high-revving nature and track capabilities.`,
    },
    {
      title: '307 cu in (5.0 L) V8:',
      description: `The 307 V8 was a popular engine choice for Camaro buyers looking for a balance of power and drivability. It produced around 200 horsepower and 300 lb-ft of torque, offering smooth acceleration and ample low-end torque.`,
    },
    {
      title: '327 cu in (5.4 L) V8:',
      description: `This mid-range V8 engine option provided a good balance of power and efficiency. With outputs ranging from 210 to 375 horsepower depending on the configuration, it offered versatility for various driving needs.`,
    },
    {
      title: '350 cu in (5.7 L) V8:',
      description: `The 350 V8 was one of the most iconic and widely used engine options for the first-generation Camaro. It offered a wide range of power outputs, from around 250 to 375 horsepower, depending on the specific variant and tuning. It was known for its robust performance and aftermarket support.`,
    },
    {
      title: '396 cu in (6.5 L) V8:',
      description: `This big-block V8 engine, also known as the 396 Turbo-Jet, was the top-of-the-line performance option for the Camaro. It produced impressive horsepower figures, ranging from around 325 to 375 horsepower, and massive torque, making it suitable for drag racing and high-speed cruising.`,
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
            Three interesting facts about the first-generation Chevrolet Camaro:
          </TitleFacts>
          <PositionContainer>
            <ImgOne
              src={Camaro2}
              alt=""
              align="left"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
            <FactOneDiv>
              <ParagraphFactOne>
                <Span>Competition with the Ford Mustang:</Span> The Chevrolet
                Camaro was introduced in direct response to the success of the
                Ford Mustang. Ford had achieved considerable success with the
                Mustang since its introduction in 1964, and Chevrolet aimed to
                capture a share of the pony car market. The Camaro was
                Chevrolet's answer to the Mustang, and both cars have since
                become iconic symbols of American muscle cars.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                <Span>Z/28 Performance Package:</Span> The Z/28 is a
                high-performance option package that became synonymous with the
                Camaro. Introduced in 1967, the Z/28 was designed for SCCA
                (Sports Car Club of America) Trans-Am racing. It featured a 302
                cubic-inch V8 engine (a special high-revving small-block), a
                heavy-duty suspension, and other performance enhancements. The
                Z/28 became one of the most sought-after and respected versions
                of the Camaro.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgTwo
              src={Camaro3}
              alt=""
              align="right"
              vspace="5"
              hspace="5"
              loading="lazy"
            />{' '}
            <FactThreeDiv>
              <ParagraphFactThree>
                <Span>Yenko Camaro:</Span> Don Yenko, a Chevrolet dealer and
                performance enthusiast, played a significant role in the
                Camaro's high-performance legacy. Yenko realized the potential
                for even more power, and in 1967, he started offering the Yenko
                Super Camaro through his dealership. These modified Camaros
                featured a 427 cubic-inch V8 engine, upgraded suspension, and
                other enhancements. Yenko Camaros are rare and highly sought
                after by collectors.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default ChevroletCamaro;
