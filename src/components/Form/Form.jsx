import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPositions } from 'redux/positions/thunks';
import { usePositions } from 'hooks/usePositions';
import { createUser, getToken } from 'redux/user/thunks';
import { useUser } from 'hooks/useUser';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from 'shared/validation/schemas';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { signup_link } from 'shared/constants/hyperlinks';
import { fields, inputs, upload } from './inputs';
import { appendValues } from 'shared/utils/appendValues';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/components/Section';
import { FieldsList, RadiosList, StyledForm } from './Form.styled';
import { PrimaryButton } from 'shared/styles/components/PrimaryButton.styled';
import { Field } from './components/Field';
import { Radio } from './components/Radio';
import { Upload } from './components/Upload';

export const Form = () => {
  const { positions } = usePositions();
  const { token, isLoading } = useUser();
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schemas.create_user),
    defaultValues: { ...getDefaultValues(inputs) },
  });

  useEffect(() => {
    dispatch(getPositions());
    dispatch(getToken());
  }, [dispatch]);

  const onSubmit = async data => {
    const formData = new FormData();
    appendValues(formData, data);
    await dispatch(createUser({ formData, token })).unwrap();
  };

  return (
    <Container>
      <Section
        id={signup_link}
        title="Working with POST request"
        paddding_bottom="100px"
      >
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <FieldsList>
            {fields.map(field => (
              <li key={field.id}>
                <Field {...field} register={register} errors={errors} />
              </li>
            ))}
          </FieldsList>

          <p>Select your position</p>
          <RadiosList>
            {positions.map(radio => (
              <li key={radio.id}>
                <Radio {...radio} register={register} />
              </li>
            ))}
          </RadiosList>

          <Upload {...upload} control={control} errors={errors} />

          <PrimaryButton disabled={!isDirty || isLoading} type="submit">
            Sign up
          </PrimaryButton>
        </StyledForm>
      </Section>
    </Container>
  );
};
