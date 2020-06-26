import React from 'react';
import {
  Container,
  Nav,
  InstaLogo,
  SearchWrapper,
  LogoSearch,
  InputSearch,
  Icons,
  HomeIcon,
  DirectIcon,
  ExplorerIcon,
  LoveIcon,
  RoundIcon
} from './styles';

const Header: React.FC = () => {
  return (
    <Nav>
      <InstaLogo />
      <SearchWrapper>
        <LogoSearch />
        <InputSearch placeholder="Pesquisar" />
      </SearchWrapper>
      <Icons>
        <HomeIcon />
        <DirectIcon />
        <ExplorerIcon />
        <LoveIcon />
        <RoundIcon />
      </Icons>
    </Nav>
  );
}

export default Header;