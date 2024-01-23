import React from 'react';
import { HeaderTitle, TitleContainer,StyledLink  } from './homepageStyle';
import Button from 'components/Button/button';


const homepage = () => {
  return (
    <>
      <TitleContainer>
        <HeaderTitle>
          Old Cars: More Than Metal, It's a Heartbeat...
        </HeaderTitle>
        <StyledLink to="/gallery">
          <Button />
        </StyledLink>
      </TitleContainer>
    </>
  );
};

export default homepage;
