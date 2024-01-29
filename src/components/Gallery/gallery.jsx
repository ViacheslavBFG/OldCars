import React from 'react';

import {
  MainDiv,
  FrameDiv,
  ImageContainer,
  Image,
  Label,
  Span,
  LinkStyleG,
} from './galleryStyle';

import chevroletcamaro from '../../styles/img/1969/chevroletcamaro/chevroletcamaro1.jpg';
import dodgecharger from '../../styles/img/1969/dodgecharger/dodgecharger1.jpg';
import fordmustang from '../../styles/img/1969/fordmustang/fordmustang1.jpg';
import mercurycougar from '../../styles/img/1969/mercurycougar/mercurycougar1 .jpg';
import pontiacfirebird from '../../styles/img/1969/pontiacfirebird/pontiacfirebird13.jpg';
import amcrebel from '../../styles/img/1969/amcrebelmachine/AMCRebel1.jpg';

const gallery = () => {
  const images = [
    {
      imageUrl: chevroletcamaro,
      buttonLabel: 'Chevrolet Camaro 1967–1969 first gen.',
      path: '/Chevrolet-Camaro',
    },
    {
      imageUrl: dodgecharger,
      buttonLabel: 'Dodge Charger 1968–1970 second gen.',
      path: '/Dodge-Charger',
    },
    {
      imageUrl: fordmustang,
      buttonLabel: 'Ford Mustang 1964-1973 first gen.',
      path: '/Ford-Mustang',
    },
    {
      imageUrl: mercurycougar,
      buttonLabel: 'Mercury Cougar 1967-1970 first gen. ',
      path: '/MercuryCougar',
    },
    {
      imageUrl: pontiacfirebird,
      buttonLabel: 'Pontiac Firebird 1967-1969 first gen.',
      path: '/PontiacFirebird',
    },
    {
      imageUrl: amcrebel,
      buttonLabel: 'AMC Rebel 1967-1970 first gen.',
      path: '/AmcRebel',
    },
  ];
  return (
    <MainDiv>
      <FrameDiv>
        {images.map((item, index) => (
          <LinkStyleG to={images[index].path}>
            <ImageContainer key={index}>
              <Label>
                <Span>{item.buttonLabel}</Span>
                <Image src={item.imageUrl} alt={`Image ${index + 1}`} />
              </Label>
            </ImageContainer>
          </LinkStyleG>
        ))}
      </FrameDiv>
    </MainDiv>
  );
};

export default gallery;