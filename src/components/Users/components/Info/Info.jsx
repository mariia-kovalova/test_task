import { Tooltip } from 'shared/components/ToolTip';
import { InfoWithCursor } from './Info.styled';

export const Info = ({ text, ariaLabel }) => {
  const isLong = text.length >= 30;

  const normalizedText = str => `${str.slice(0, 27)}...`;

  return (
    <>
      {!isLong && <p>{text}</p>}
      {isLong && (
        <Tooltip ariaLabel={ariaLabel} text={text}>
          <InfoWithCursor>{normalizedText(text)}</InfoWithCursor>
        </Tooltip>
      )}
    </>
  );
};
