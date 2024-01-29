import React from 'react';
import { GlowingButtonContainer, GlowingText, FaultyLetter,FaultyLetter2} from './buttonStyle';

const GlowingButton = () => {
  return (
    <GlowingButtonContainer>
      <GlowingText>
        L<FaultyLetter>E</FaultyLetter>T'<FaultyLetter2>S</FaultyLetter2> GO
      </GlowingText>
    </GlowingButtonContainer>
  );
};

export default GlowingButton;