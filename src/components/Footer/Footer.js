import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Link = styled.a`
color: ${({ theme }) => theme.colors.white};
font-weight: 500;
white-space: nowrap;
transition: all .2s ease;

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
