import { Section } from 'shared/components/Section';
import { signup_link } from 'shared/constants/hyperlinks';
import { Bg } from './RegisterSuccess.styled';
import { Container } from 'shared/styles/components/Container.styled';

export const RegisterSuccess = () => {
  return (
    <Section
      id={`#${signup_link}`}
      paddding_bottom="100px"
      title="User successfully registered"
    >
      <Container>
        <Bg />
      </Container>
    </Section>
  );
};
