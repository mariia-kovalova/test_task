import styled from '@emotion/styled';

export const HelperText = styled.span`
  position: absolute;
  bottom: -16px;
  left: 16px;

  font-size: 12px;
  color: ${({ isError }) =>
    isError ? 'var(--error)' : 'var(--input-text-color-default)'};
`;
