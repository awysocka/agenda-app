import styled from 'styled-components';

const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 60px;
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

const Footer = () => {
  return (
    <Container>
      <span>
        Copyright © 2021{' '}
        <Link href='https://annawysocka.pl/' target='_blank' rel='noopener noreferrer'>
          Anna Wysocka
        </Link>
      </span>
    </Container>
  );
};

export default Footer;
