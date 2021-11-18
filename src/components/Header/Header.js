import PropTypes from 'prop-types';
import styled from 'styled-components';
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton';

const Container = styled.div`
  position: fixed;
  top: 0;
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px;
  z-index: 2;

  @media ${({ theme }) => theme.device.tablet} {
    padding: 15px 36px;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2.4rem;
  font-weight: 500;
`;

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
