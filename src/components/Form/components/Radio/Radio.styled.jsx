import styled from '@emotion/styled';

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

  & + label {
    position: relative;
    padding-left: 32px;
    cursor: pointer;
  }

  & + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;

    width: 20px;
    height: 20px;

    border: 2px solid var(--input-border-color);
    border-radius: 100%;
    background: var(--bg-primary);
  }

  &:checked + label:before {
    border-color: var(--secondary);
  }

  & + label:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 5.2px;

    width: 10px;
    height: 10px;

    background-color: var(--secondary);
    border-radius: 50%;
    transition: opacity 0.2s var(--cubic), transform 0.2s var(--cubic);
  }

  &:not(:checked) + label:after {
    opacity: 0;
    transform: scale(0);
  }

  &:checked + label:after {
    opacity: 1;
    transform: scale(1);
  }
`;
