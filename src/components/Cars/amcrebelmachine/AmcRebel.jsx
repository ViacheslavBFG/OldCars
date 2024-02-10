import React from 'react';
import Header from 'components/Header/header';
import Engine from '../../Engine/engine';
import AMC2 from '../../../styles/img/1969/amcrebelmachine/AMCRebel2.jpg';
import AMC3 from '../../../styles/img/1969/amcrebelmachine/AMCRebel3.jpg';

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
  HeaderDiv,
  EngDiv,

} from './AmcRebelStyle';
import { Link } from 'react-router-dom';

const AmcRebel = () => {
  const enginesData = [
    {
      title: '199 cu in (3.3 L) Straight-6:',
      description:
        'This was the base engine option for the AMC Rebel. It was a reliable and fuel-efficient inline-six engine, producing around 128 horsepower and 180 lb-ft of torque. It was paired with a manual or automatic transmission.',
    },
    {
      title: '232 cu in (3.8 L) Straight-6:',
      description:
        'This was a larger inline-six engine option available for the Rebel. It produced more power compared to the 199 cu in engine, with approximately 145 horsepower and 215 lb-ft of torque. It was also offered with manual or automatic transmission choices.',
    },
    {
      title: '290 cu in (4.8 L) V8:',
      description: `The 290 V8 was one of the
      available V8 engine options for the Rebel. It provided more power
      and performance compared to the inline-six engines, producing around
      200 horsepower and 285 lb-ft of torque. It was paired with either a
      manual or automatic transmission.`,
    },
    {
      title: '343 cu in (5.6 L) V8:',
      description: `This was a higher-performance V8
      engine offered for the Rebel. It was the largest displacement V8
      available for the first-generation Rebel. The 343 V8 produced
      approximately 235 horsepower and 335 lb-ft of torque. It was
      available with manual or automatic transmissions.`,
    },
    {
      title: '390 cu in (6.4 L) V8:',
      description: `The 390 V8 was the most powerful
      engine option for the first-generation AMC Rebel. It was a
      high-performance V8 engine, delivering around 315 horsepower and 425
      lb-ft of torque. It provided impressive acceleration and
      performance. The 390 V8 was typically paired with automatic
      transmission for better drivability.`,
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
            Three interesting facts about the first-generation AMC Rebel:
          </TitleFacts>
          <PositionContainer>
            <ImgOne
              src={AMC2}
              alt=""
              align="left"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
            <FactOneDiv>
              <ParagraphFactOne>
                <Span>Introduction of "Marlin" Fastback Model:</Span> The
                first-generation AMC Rebel included a unique and distinctive
                fastback model known as the "Marlin." The AMC Marlin was
                initially introduced in 1965 as a standalone model before being
                incorporated into the Rebel lineup in 1967. The Marlin featured
                a sleek and aerodynamic fastback design, distinguishing it from
                other midsize cars of the era. The fastback style was an attempt
                to combine sportiness with the practicality of a midsize car.
              </ParagraphFactOne>
            </FactOneDiv>
            <FactTwoDiv>
              <ParagraphFactTwo>
                <Span>Available with a "Twin-Stick" Manual Transmission:</Span>
                The AMC Rebel was offered with an innovative and somewhat rare
                manual transmission option known as the "Twin-Stick." This
                feature was available on certain Rebel models equipped with a
                floor-mounted shifter. The Twin-Stick transmission allowed the
                driver to independently shift the car's overdrive and standard
                gears, providing greater control over the vehicle's performance.
                It was a unique feature that added a touch of versatility to the
                driving experience.
              </ParagraphFactTwo>
            </FactTwoDiv>
            <ImgTwo
              src={AMC3}
              alt=""
              align="right"
              vspace="5"
              hspace="5"
              loading="lazy"
            />
            <FactThreeDiv>
              <ParagraphFactThree>
                <Span>Performance-Oriented "Machine" Variant:</Span>In 1970, the
                Rebel line featured a high-performance variant known as the AMC
                Rebel "The Machine." This model was part of AMC's efforts to
                compete in the muscle car market. "The Machine" was equipped
                with a powerful 390 cubic-inch V8 engine, producing impressive
                horsepower. It featured distinctive red, white, and blue
                graphics, a functional ram-air hood scoop, and other
                performance-oriented components. While it had a short production
                run, "The Machine" is remembered as one of AMC's notable entries
                into the muscle car segment.
              </ParagraphFactThree>
            </FactThreeDiv>
          </PositionContainer>
        </TextContainer>
      </MainContainer>
    </>
  );
};

export default AmcRebel;
