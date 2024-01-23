import React from 'react';
import {
  MainDiv,
  FrameDiv,
  BtnCar,
  ImageContainer,
  Image,
} from './galleryStyle';

import chevroletcamaro from '../../styles/img/1969/chevroletcamaro/chevroletcamaro1.jpg';
import dodgecharger from '../../styles/img/1969/dodgecharger/dodgecharger1.jpg';
import fordmustang from '../../styles/img/1969/fordmustang/fordmustang1.jpg';
import mercurycougar from '../../styles/img/1969/mercurycougar/mercurycougar1 .jpg';
import pontiacfirebird from '../../styles/img/1969/pontiacfirebird/pontiacfirebird13.jpg';
import AMCRebel from '../../styles/img/1969/amcrebelmachine/AMCRebel1.jpg';
const gallery = () => {
  const images = [
    {
      imageUrl: chevroletcamaro,
      buttonLabel: 'Кнопка 1',
    },
    {
      imageUrl: dodgecharger,
      buttonLabel: 'Кнопка 2',
    },
    {
      imageUrl: fordmustang,
      buttonLabel: 'Кнопка 3',
    },
    {
      imageUrl: mercurycougar,
      buttonLabel: 'Кнопка 4',
    },
    {
      imageUrl: pontiacfirebird,
      buttonLabel: 'Кнопка 5',
    },
    {
        imageUrl: AMCRebel,
        buttonLabel: 'Кнопка 6',
      },
  ];
  return (
    <MainDiv>
      <FrameDiv>
        {images.map((item, index) => (
          <ImageContainer key={index}>
            <Image src={item.imageUrl} alt={`Image ${index + 1}`} />
            <BtnCar>{item.buttonLabel}</BtnCar>
          </ImageContainer>
        ))}
      </FrameDiv>
    </MainDiv>
  );
};

export default gallery;
