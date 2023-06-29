import styled from '@emotion/styled';
import { desktop, tablet } from 'shared/constants/deviceSizes';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  margin-bottom: 50px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  @media screen and (min-width: ${desktop}) {
    gap: 29px;
  }
`;

export const Item = styled.li`
  flex-basis: 100%;

  @media screen and (min-width: ${tablet}) {
    flex-basis: calc((100% - 16px) / 2);
  }

  @media screen and (min-width: ${desktop}) {
    flex-basis: calc((100% - (29px * 2)) / 3);
  }
`;
