import styled from '@emotion/styled';
import hero_x1 from 'shared/images/hero@x1.jpg';
import hero_x2 from 'shared/images/hero@x2.jpg';
import { desktop, large, tablet } from 'shared/constants/deviceSizes';

export const Bg = styled.div`
  padding: 40px 16px 71px;
  margin: 0 auto;
  max-width: ${large};

  background: #c4c4c4;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${hero_x1});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${hero_x2});
  }

  @media screen and (min-width: ${tablet}) {
    padding-top: 89px;
    padding-bottom: 88px;
  }

  @media screen and (min-width: ${desktop}) {
    padding-top: 164px;
    padding-bottom: 163px;
  }
`;

export const Tittle = styled.h1`
  margin: 0 auto var(--gap);
  max-width: 380px;

  color: var(--text-color-light);
  text-align: center;
`;

export const Description = styled.p`
  margin: 0 auto 32px;
  max-width: 380px;

  color: var(--text-color-light);
  text-align: center;
`;
