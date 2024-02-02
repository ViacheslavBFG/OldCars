// Ваш React компонент в файле Button.js
import React from 'react';
import StyledLink, { Wrapper } from './headerStyle';

const Button = () => {
  return (
    <Wrapper>
      <StyledLink href="#">
        <span>BACK</span>
      </StyledLink>
    </Wrapper>
  );
};

export default Button;
