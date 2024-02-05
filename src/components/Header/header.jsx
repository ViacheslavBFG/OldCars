
import React from 'react';
import StyledLink, { Wrapper } from './headerStyle';

const Button = () => {
  return (
    <Wrapper>
      <StyledLink href="#">
        <span>&#8592; BACK</span>
      </StyledLink>
    </Wrapper>
  );
};

export default Button;
