import { signup_link } from 'shared/constants/hyperlinks';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemas } from 'shared/validation/schemas';
import { getDefaultValues } from 'shared/utils/getDefaultValues';
import { fields, inputs } from './inputs';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/components/Section';
import { FieldsList, RadiosList, StyledForm } from './Form.styled';
import { PrimaryButton } from 'shared/styles/components/PrimaryButton.styled';
import { Field } from './components/Field';
import { Radio } from './components/Radio';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPositions } from 'redux/positions/thunks';
import { usePositions } from 'hooks/usePositions';

export const Form = () => {
  const { positions } = usePositions();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: yupResolver(schemas.create_user),
    defaultValues: { ...getDefaultValues(inputs) },
  });

  useEffect(() => {
    dispatch(getPositions());
  }, [dispatch]);

  const onSubmit = async data => {
    // console.log(data);
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

          <div>
            <p>Select your position</p>
            <RadiosList>
              {positions.map(radio => (
                <li key={radio.id}>
                  <Radio {...radio} register={register} />
                </li>
              ))}
            </RadiosList>
          </div>

          <PrimaryButton disabled={!isDirty} type="submit">
            Sign up
          </PrimaryButton>
        </StyledForm>
      </Section>
    </Container>
  );
};
