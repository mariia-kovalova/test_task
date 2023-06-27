import { StyledHeader, Wrap } from './Header.styled';
import { Container } from 'shared/styles/components/Container.styled';
import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Wrap>
          <Logo />
          <NavBar />
        </Wrap>
      </Container>
    </StyledHeader>
  );
};
