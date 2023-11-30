import { RxHamburgerMenu } from 'react-icons/rx';

import logo from '../../assets/logo/logo.svg';

import { HeaderSection, LogoLink, Button } from './Header.styled';

const Header = () => {
  return (
    <HeaderSection>
      <LogoLink to="/">
        <img src={logo} alt="logo" />
        ecosolution
        <p>
          <span>GREEN</span>ERGY
          <br /> FOR LIFE
        </p>
      </LogoLink>

      <Button>
        <RxHamburgerMenu />
      </Button>
    </HeaderSection>
  );
};

export default Header;
