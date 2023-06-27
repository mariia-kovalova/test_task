import { fields } from './inputs';

import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/components/Section';
import { StyledForm } from './Form.styled';
import { PrimaryButton } from 'shared/styles/components/PrimaryButton.styled';
import { Field } from './components/Field';

export const Form = () => {
  return (
    <Container>
      <Section title="Working with POST request">
        <StyledForm>
          <ul>
            {fields.map(field => (
              <li key={field.id}>
                <Field {...field} />
              </li>
            ))}
          </ul>
          <PrimaryButton disabled={true} type="submit">
            Sign up
          </PrimaryButton>
        </StyledForm>
      </Section>
    </Container>
  );
};
