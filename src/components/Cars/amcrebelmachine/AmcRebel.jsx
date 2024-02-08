import React from 'react';
import Header from 'components/Header/header';
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
} from './AmcRebelStyle';
import { Link } from 'react-router-dom';

const AmcRebel = () => {
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
