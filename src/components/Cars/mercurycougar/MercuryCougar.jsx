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
import { HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';

const MercuryCougar = () => {
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
