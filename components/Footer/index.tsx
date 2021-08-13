import { ReactNode } from 'react';

import { Container, Title } from './styles';

interface FooterProps {
  children: ReactNode;
}

function Footer() {
  return (
    <Container>
      <Title>BY RODRIGO</Title>
    </Container>
  );
}

export default Footer;
