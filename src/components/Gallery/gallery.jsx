import React from 'react';

import chevroletcamaro from '../../styles/img/1969/chevroletcamaro/chevroletcamaro1.jpg';
import dodgecharger from '../../styles/img/1969/dodgecharger/dodgecharger1.jpg';
import fordmustang from '../../styles/img/1969/fordmustang/fordmustang1.jpg';
import mercurycougar from '../../styles/img/1969/mercurycougar/mercurycougar1 .jpg';
import pontiacfirebird from '../../styles/img/1969/pontiacfirebird/pontiacfirebird13.jpg';
import amcrebel from '../../styles/img/1969/amcrebelmachine/AMCRebel1.jpg';

import {
  MainDiv,
  ImgContainer,
  Label,
  Span,
  ImgCars,
  LinkStyle,
} from './galleryStyle';

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
    <MainDiv className="container-fluid ">
      <div className="row justify-content-center mt-5 ">
        {images.map((image, index) => (
          <ImgContainer
            key={index}
            className="col-sm-12 col-md-6 col-xxl-4 mt-3"
          >
            <LinkStyle to={image.path}>
              <Label>
                <Span>{image.buttonLabel}</Span>
                <ImgCars
                  className="img-fluid"
                  src={image.imageUrl}
                  alt={image.buttonLabel}
                  loading="lazy"
                />
              </Label>
            </LinkStyle>
          </ImgContainer>
        ))}
      </div>
    </MainDiv>
  );
};
export default gallery;
