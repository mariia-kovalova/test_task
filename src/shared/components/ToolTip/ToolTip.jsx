import { useState } from 'react';
import PropTypes from 'prop-types';
import { down, up } from 'shared/constants/tooltipPosition';

import { Text, Trigger } from './ToolTip.styled';

export const Tooltip = ({
  text,
  ariaLabel = 'tooltip',
  position = down,
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleTooltip = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <Trigger
        className="tooltip"
        onMouseEnter={toggleTooltip}
        onMouseLeave={toggleTooltip}
      >
        {children}
        {isVisible && (
          <Text aria-label={ariaLabel} position={position}>
            {text}
          </Text>
        )}
      </Trigger>
    </>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string,
  position: PropTypes.oneOf([up, down]),
};
