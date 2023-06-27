import styled from '@emotion/styled';
import { desktop, large, mobile, tablet } from 'shared/constants/deviceSizes';

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media screen and (min-width: ${mobile}) {
    width: ${mobile};
  }

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
    padding-left: 32px;
    padding-right: 32px;
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
    padding-left: 60px;
    padding-right: 60px;
  }

  @media screen and (min-width: ${large}) {
    width: ${large};
    padding-left: 0;
    padding-right: 0;
  }
`;
