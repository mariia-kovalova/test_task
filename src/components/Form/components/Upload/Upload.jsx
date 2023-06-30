import PropTypes from 'prop-types';
import { Group, Input, InputText, Label, LabelText } from './Upload.styled';
import { InputHelper } from 'shared/components/InputHelper';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { textSizeNormalize } from 'shared/utils/textSizeNormalize';

export const Upload = ({
  id,
  inputName,
  label,
  placeholder,
  helperText,
  control,
  errors,
}) => {
  const [file, setFile] = useState(null);
  const isError = errors[inputName];

  return (
    <Group>
      <Label htmlFor={id}>
        <LabelText isError={isError}>{label}</LabelText>
        <InputText isError={isError}>
          {(file && textSizeNormalize(file.name, 29)) || placeholder}
        </InputText>
      </Label>
      <Controller
        control={control}
        name={inputName}
        render={({ field: { onChange, value, ...field } }) => {
          return (
            <Input
              {...field}
              id={id}
              type="file"
              isError={isError}
              accept="image/*"
              value={value?.fileName}
              onChange={event => {
                setFile(event.target.files[0]);
                onChange(event.target.files[0]);
              }}
            />
          );
        }}
      />

      <InputHelper
        inputName={inputName}
        helperText={helperText}
        errors={errors}
      />
    </Group>
  );
};

Upload.propTypes = {
  id: PropTypes.string.isRequired,
  inputName: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  helperText: PropTypes.string,
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
