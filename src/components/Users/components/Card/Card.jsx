import PropTypes from 'prop-types';
import { Avatar } from '../Avatar';
import { Info, Wrap } from './Card.styled';
import { textSizeNormalize } from 'shared/utils/textSizeNormalize';
import { Tooltip } from 'shared/components/ToolTip';

export const Card = ({ name, email, phone, position, photo }) => {
  const info = [
    { data: email, ariaLabel: 'email' },
    { data: phone, ariaLabel: 'phone' },
    { data: position, ariaLabel: 'position' },
  ];

  return (
    <Wrap>
      <Avatar photo={photo} name={name} />
      <Tooltip ariaLabel="name" text={name}>
        <Info>{textSizeNormalize(name)}</Info>
      </Tooltip>
      <ul>
        {info.map(({ data, ariaLabel }) => (
          <li key={data}>
            <Tooltip ariaLabel={ariaLabel} text={data}>
              <Info>{textSizeNormalize(data)}</Info>
            </Tooltip>
          </li>
        ))}
      </ul>
    </Wrap>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
