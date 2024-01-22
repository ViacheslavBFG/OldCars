import React, { useEffect, useState } from 'react';
import { Btn } from './buttonStyle';

const Button = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(true);
    }, 6500);

    return () => clearTimeout(timeoutId);
  }, []);

  return <>{isVisible && <Btn>LET'S GO !</Btn>}</>;
};

export default Button;
