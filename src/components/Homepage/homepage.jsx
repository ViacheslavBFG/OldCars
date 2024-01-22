import React from 'react';
import { HeaderTitle, TitleContainer } from './homepageStyle';
import Button from 'components/Button/button';
import { Link } from 'react-router-dom';

const homepage = () => {
  return (
    <>
      <TitleContainer>
        <HeaderTitle>
          Old Cars: More Than Metal, It's a Heartbeat...
        </HeaderTitle>
        <Link to="/galery">
          <Button />
        </Link>
      </TitleContainer>
    </>
  );
};

export default homepage;
