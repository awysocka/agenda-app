import { Container, Link } from './Footer.styles';

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
