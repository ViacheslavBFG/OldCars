import React from 'react';
import { HeaderTitle, TitleContainer } from './homepageStyle';
import Button from 'components/Button/button';

const homepage = () => {
  return (
    <>
      <TitleContainer>
        <HeaderTitle>
          Old Cars: More Than Metal, It's a Heartbeat...
        </HeaderTitle>
        <Button />
      </TitleContainer>
    </>
  );
};

export default homepage;
