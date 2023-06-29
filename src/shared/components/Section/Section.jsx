import PropTypes from 'prop-types';
import { StyledSection, Tittle } from './Section.styled';

export const Section = ({ id, title, paddding_bottom = '0', children }) => {
  return (
    <StyledSection id={id} paddding_bottom={paddding_bottom}>
      {title && <Tittle>{title}</Tittle>}
      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  paddding_bottom: PropTypes.string,
};
