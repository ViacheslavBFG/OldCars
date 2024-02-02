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
import { HeaderDiv } from '../amcrebelmachine/AmcRebelStyle';

const FordMustang = () => {
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
            Three interesting facts about the first-generation Ford Mustang:
          </TitleFacts>
          <PositionContainer>
            <ImgOne src={Ford2} alt="" align="left" vspace="5" hspace="5" />
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
            <ImgOne src={Ford3} alt="" align="right" vspace="5" hspace="5" />{' '}
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
