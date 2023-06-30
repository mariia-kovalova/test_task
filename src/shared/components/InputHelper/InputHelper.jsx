import PropTypes from 'prop-types';
import { ErrorMessage } from '@hookform/error-message';
import { HelperText } from './InputHelper.styled';

export const InputHelper = ({ inputName, helperText, errors }) => {
  const isError = errors[inputName];
  const isHelper = !isError && helperText;

  return (
    <HelperText isError={isError}>
      {isHelper && helperText}
      <ErrorMessage errors={errors} name={inputName} />
    </HelperText>
  );
};

InputHelper.propTypes = {
  inputName: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  errors: PropTypes.object.isRequired,
};
