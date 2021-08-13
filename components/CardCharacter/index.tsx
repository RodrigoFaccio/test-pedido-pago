import Link from 'next/link';
import React from 'react';

import { Container, ImageCard, Title } from './styles';
interface CharacterInfos {
  name: string;
  src: string;
  id: number;
  params: string;
}
function CardCharacter({ name, src, id, params }: CharacterInfos) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={`/${params}/${id}`}>
      <Container>
        <ImageCard src={src} />
        <Title>{name}</Title>
      </Container>
    </Link>
  );
}

export default CardCharacter;
