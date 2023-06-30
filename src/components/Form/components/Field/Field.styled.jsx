import styled from '@emotion/styled/macro';

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);

  color: ${({ isError }) =>
    isError ? 'var(--error)' : 'var(--input-text-color-default)'};

  transition: transform 250ms var(--cubic), font-size 250ms var(--cubic),
    font-weight 250ms var(--cubic);

  &::before {
    content: '';
    position: absolute;
    top: 8.6px;
    left: -4px;
    z-index: -1;

    width: calc(100% + 8px);
    height: 2px;

    background-color: var(--bg-primary);
    opacity: 0;
    transition: opacity 250ms var(--cubic);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 14px 16px;

  font: inherit;
  border-radius: 4px;
  border: ${({ isError }) => (isError ? '2px' : '1px')} solid
    ${({ isError }) => (isError ? 'var(--error)' : 'var(--input-border-color)')};

  background-color: var(--bg-primary);
  color: inherit;

  // instead of the placeholder user can see the label
  &::placeholder {
    color: transparent;
  }

  &:focus {
    outline: none;
  }
`;

export const Group = styled.div`
  position: relative;

  height: 54px;

  // when label is focused
  // or the user has entered some text
  &:focus-within > ${Label}, ${Input}:not(:placeholder-shown) + ${Label} {
    transform: translateY(-36px);

    font-size: 12px;
    font-weight: 500;
    line-height: 1.6;

    &::before {
      opacity: 1;
    }
  }
`;
