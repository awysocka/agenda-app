import PropTypes from 'prop-types';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';
import { Container, Title } from './Header.styles';

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <AuthenticationButton />
    </Container>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
