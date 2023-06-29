import React from 'react';
import { Circle, Svg } from './Preloader.styled';

export const Preloader = () => {
  return (
    <Svg viewBox="25 25 50 50">
      <Circle r="20" cy="50" cx="50"></Circle>
    </Svg>
  );
};
