import React from 'react';
import { HeaderTitle, TitleContainer, StyledLink } from './homepageStyle';
import Button from 'components/Button/button';

const homepage = () => {
  return (
    <>
      <TitleContainer>
        <div className="container">
          <div className="row">
            <HeaderTitle className="col-md-12 text-center">
              Old Cars: More Than Metal, It's a Heartbeat...
            </HeaderTitle>
          </div>
        </div>
        <StyledLink to="/gallery">
          <Button />
        </StyledLink>
      </TitleContainer>
    </>
  );
};

export default homepage;
