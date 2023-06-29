import styled from '@emotion/styled/macro';

export const Label = styled.label`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  padding-left: 4px;
  padding-right: 4px;

  background-color: var(--bg-primary);
  color: ${({ isError }) =>
    isError ? 'var(--error)' : 'var(--input-text-color-default)'};

  transition: transform 250ms var(--cubic), font-size 250ms var(--cubic),
    font-weight 250ms var(--cubic);
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 14px 16px;

  font: inherit;
  border-radius: 4px;
  border: 1px solid
    ${({ isError }) => (isError ? 'var(--error)' : 'var(--input-border-color)')};

  background-color: var(--bg-primary);
  color: inherit;

  &::placeholder {
    // instead of the placeholder user can see the label
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
  }
`;

export const HelperText = styled.span`
  position: absolute;
  bottom: -16px;
  left: 16px;

  font-size: 12px;
  color: var(--input-text-color-default);
`;

export const Error = styled(HelperText)`
  color: var(--error);
`;
