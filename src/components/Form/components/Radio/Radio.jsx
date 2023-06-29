import PropTypes from 'prop-types';
import { Input } from './Radio.styled';

export const Radio = ({ id, inputName, label, value, register }) => {
  return (
    <>
      <Input id={id} type="radio" value={value} {...register(inputName)} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  register: PropTypes.func.isRequired,
};
