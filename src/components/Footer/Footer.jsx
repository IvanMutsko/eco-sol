import { GoArrowUp } from 'react-icons/go';
import Logo from '../Logo/Logo';
import icons from '../../assets/icons/contacts.svg';
import scrollToSection from '../../utils/scrollToSection';

import {
  FooterSection,
  Line,
  NavigateLink,
  LogoWrap,
  SocialWrap,
  SocialLink,
  ContactLink,
  ContactsWrap,
} from './Footer.styled';

const Footer = () => {
  return (
    <FooterSection>
      <Line />
      <LogoWrap>
        <Logo />
        <NavigateLink to="#main" onClick={() => scrollToSection('main')}>
          <GoArrowUp className="icon" />
        </NavigateLink>
      </LogoWrap>
      <SocialWrap>
        <SocialLink
          className="social-link"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className={`icon`}>
            <use href={`${icons}#icon-facebook`}></use>
          </svg>
        </SocialLink>
        <SocialLink
          className="social-link"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className={`icon`}>
            <use href={`${icons}#icon-instagram`}></use>
          </svg>
        </SocialLink>
      </SocialWrap>
      <ContactsWrap>
        <ContactLink
          href="https://maps.app.goo.gl/mycP6AK2KasvRCQF7"
          target="_blank"
          rel="noopener noreferrer"
        >
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactLink>
        <ContactLink href="mailto:office@ecosolution.com">
          office@ecosolution.com
        </ContactLink>
        <p>ecosolution © 2023</p>
      </ContactsWrap>
    </FooterSection>
  );
};

export default Footer;
