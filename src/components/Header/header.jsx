import React from 'react';
import {
  GlowingButtonContainer,
  GlowingText,
  FaultyLetter,
  FaultyLetter2,
} from './headerStyle';

const GlowingButton = () => {
  return (
    <GlowingButtonContainer>
      <GlowingText>
        B<FaultyLetter>A</FaultyLetter>C<FaultyLetter2>K</FaultyLetter2>
      </GlowingText>
    </GlowingButtonContainer>
  );
};

export default GlowingButton;
