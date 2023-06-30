import styled from '@emotion/styled/macro';

const labelTextWidth = '83px';

export const Group = styled.div`
  // InputHelper - position: absolute;
  position: relative;

  height: 54px;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;

  width: 100%;
  height: 100%;
  margin: 0;
`;

export const LabelText = styled.span`
  width: ${labelTextWidth};
  height: 100%;
  padding: 14px 15px;

  background-color: var(--bg-primary);
  color: var(--text-color-dark);

  border-radius: 4px 0 0 4px;
  border: ${({ isError }) => (isError ? '2px' : '1px')} solid
    ${({ isError }) => (isError ? 'var(--error)' : 'var(--text-color-dark)')};

  transition: color 250ms var(--cubic), border-color 250ms var(--cubic);
`;

export const InputText = styled.span`
  width: calc(100% - ${labelTextWidth});
  height: 100%;
  padding: 14px 16px;

  font: inherit;
  border-radius: 0 4px 4px 0;
  border: ${({ isError }) => (isError ? '2px' : '1px')} solid
    ${({ isError }) => (isError ? 'var(--error)' : 'var(--input-border-color)')};

  border-left: none;

  background-color: var(--bg-primary);
  color: var(--input-text-color-default);
`;

export const Input = styled.input`
  // visually hidden
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
