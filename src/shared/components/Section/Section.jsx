import PropTypes from 'prop-types';
import { StyledSection, Tittle } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <StyledSection>
      {title && <Tittle>{title}</Tittle>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
