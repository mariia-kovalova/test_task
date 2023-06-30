import PropTypes from 'prop-types';
import { Group, Input, Label } from './Field.styled';
import { InputHelper } from 'shared/components/InputHelper';

export const Field = ({
  id,
  type,
  inputName,
  label,
  placeholder,
  helperText,
  register,
  errors,
}) => {
  const isError = errors[inputName];

  return (
    <Group>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        isError={isError}
        {...register(inputName)}
      />
      <Label htmlFor={id} isError={isError}>
        {label}
      </Label>
      <InputHelper
        inputName={inputName}
        helperText={helperText}
        errors={errors}
      />
    </Group>
  );
};

Field.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  helperText: PropTypes.string,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};
