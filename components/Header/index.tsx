import React from 'react';
import Link from 'next/link';

import { Container, Menu, MenuItem, Logo } from './styles';

function Header() {
  return (
    <Container>
      <Logo
        src={`https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg`}
      />
      <Menu>
        <Link href={`/category/characters`}>
          <MenuItem>Herois</MenuItem>
        </Link>
        <Link href={`/category/comics`}>
          <MenuItem>comics</MenuItem>
        </Link>
      </Menu>
    </Container>
  );
}

export default Header;
