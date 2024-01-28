import React from 'react';
import { GlowingButtonContainer, GlowingText, FaultyLetter } from './buttonStyle';

const GlowingButton = () => {
  return (
    <GlowingButtonContainer>
      <GlowingText>
        L<FaultyLetter>E</FaultyLetter>T'S GO
      </GlowingText>
    </GlowingButtonContainer>
  );
};

export default GlowingButton;