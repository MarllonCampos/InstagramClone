import React from 'react';

import { Container, LogoInsta, SearchInput, Icons, HomeIcon, DirectIcon, ExplorerIcon, LoveIcon, RoundIcon } from './styles';

const Layout: React.FC = () => {
  return (
      <Container>
          <LogoInsta />
          <SearchInput />
          <Icons>
              <HomeIcon />
              <DirectIcon />
              <ExplorerIcon />
              <LoveIcon />
              <RoundIcon />
          </Icons>
      </Container>
  );
}

export default Layout;