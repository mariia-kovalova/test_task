import { ErrorMessage } from '@hookform/error-message';
import { Error, Group, HelperText, Input, Label } from './Field.styled';

export const Field = ({
  id,
  type,
  inputName,
  label,
  placeholder,
  helper_text,
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
      {!isError && helper_text && <HelperText>{helper_text}</HelperText>}
      <Error>
        <ErrorMessage errors={errors} name={inputName} />
      </Error>
    </Group>
  );
};
