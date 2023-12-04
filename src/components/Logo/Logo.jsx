import logo from '../../assets/logo/logo.svg';

import { LogoLink } from './Logo.styled';

const Logo = () => {
  return (
    <LogoLink to="/">
      <img src={logo} alt="logo" />
      ecosolution
      <p>
        <span>GREEN</span>ERGY
        <br /> FOR LIFE
      </p>
    </LogoLink>
  );
};

export default Logo;
