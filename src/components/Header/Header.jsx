import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '../Logo/Logo';

import { HeaderSection, Button } from './Header.styled';

const Header = () => {
  return (
    <HeaderSection>
      <Logo />

      <Button>
        <RxHamburgerMenu />
      </Button>
    </HeaderSection>
  );
};

export default Header;
