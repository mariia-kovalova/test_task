import styled from '@emotion/styled';

export const PrimaryButton = styled.button`
  display: block;
  min-width: 100px;
  height: 34px;

  padding: 4px 16px;
  margin: 0 auto;

  background-color: var(--btn-primary-normal);
  border-radius: 80px;

  line-height: 1.625;
  text-align: center;

  transition: transform 250ms var(--cubic), color 250ms var(--cubic),
    background-color 250ms var(--cubic);

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: var(--btn-primary-hover);
    transform: scale(1.01);
  }

  &:disabled {
    cursor: default;
    background-color: var(--btn-primary-disabled);
    color: var(--btn-text-color-disabled);
  }
`;
