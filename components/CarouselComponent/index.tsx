import { ReactNode } from 'react';

import { Container, Img } from './styles';
interface srcProps {
  src: string;
}
function CarouselComponent({ src }: srcProps) {
  return (
    <Container>
      <Img width="200" height="220" src={src} alt="" />
    </Container>
  );
}

export default CarouselComponent;
