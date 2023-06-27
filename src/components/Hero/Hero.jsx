import { signup } from 'shared/constants/hyperlinks';
import { Bg, Description, Tittle } from './Hero.styled';
import { PrimaryLink } from 'shared/styles/components/PrimaryLink.styled';

export const Hero = () => {
  return (
    <Bg>
      <Tittle>Test assignment for front-end developer</Tittle>
      <Description>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </Description>
      <PrimaryLink href={`#${signup}`}>Sign up</PrimaryLink>
    </Bg>
  );
};
