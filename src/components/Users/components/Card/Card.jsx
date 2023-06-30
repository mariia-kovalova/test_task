import PropTypes from 'prop-types';
import { Wrap } from './Card.styled';
import { Avatar } from '../Avatar';
import { Info } from '../Info';

export const Card = ({ name, email, phone, position, photo }) => {
  const info = [
    { data: email, ariaLabel: 'email' },
    { data: phone, ariaLabel: 'phone' },
    { data: position, ariaLabel: 'position' },
  ];

  return (
    <Wrap>
      <Avatar photo={photo} name={name} />
      <Info text={name} ariaLabel="name" />
      <ul>
        {info.map(({ data, ariaLabel }) => (
          <li key={data}>
            <Info text={data} ariaLabel={ariaLabel} />
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
