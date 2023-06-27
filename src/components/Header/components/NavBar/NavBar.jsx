import { links } from './links';
import { PrimaryLink } from 'shared/styles/components/PrimaryLink.styled';
import { List } from './NavBar.styled';

export const NavBar = () => {
  return (
    <nav>
      <List>
        {links.map(({ href, text }) => (
          <li key={href}>
            <PrimaryLink href={href}>{text}</PrimaryLink>
          </li>
        ))}
      </List>
    </nav>
  );
};
