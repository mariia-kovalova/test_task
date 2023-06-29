import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const rotate = keyframes`
 100% {
  transform: rotate(360deg);
 }
`;

const dash = keyframes`
 0% {
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
 }

 50% {
  stroke-dasharray: 90, 200;
  stroke-dashoffset: -35px;
 }

 100% {
  stroke-dashoffset: -125px;
 }
`;

export const Svg = styled.svg`
  width: 48px;
  height: 48px;
  animation: ${rotate} 2s linear infinite;
`;

export const Circle = styled.circle`
  fill: none;
  stroke: var(--secondary);
  stroke-width: 5;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: ${dash} 1.5s ease-in-out infinite;
`;
