import { Container } from 'shared/styles/components/Container.styled';
import { Section } from 'shared/components/Section';
import { Card } from './components/Card';
import { PrimaryButton } from 'shared/styles/components/PrimaryButton.styled';

const users = [1, 2, 3];

export const Users = () => {
  return (
    <Container>
      <Section title="Working with GET request">
        <ul>
          {users.map(user => (
            <li key={user}>
              <Card />
            </li>
          ))}
        </ul>
        <PrimaryButton type="button">Show more</PrimaryButton>
      </Section>
    </Container>
  );
};
