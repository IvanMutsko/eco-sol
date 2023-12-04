import CallbackForm from '../CallbackForm/CallbackForm';
import icons from '../../assets/icons/contacts.svg';

import {
  Section,
  Title,
  ContactWrap,
  Text,
  ContactLink,
  SocialWrap,
} from './ContactUs.styled';

const ContactUs = () => {
  return (
    <Section id="contact-us">
      <Title>Contact us</Title>
      <ContactWrap>
        <Text>Phone:</Text>
        <ContactLink href="tel:+380931234567">
          <svg className={`icon`}>
            <use href={`${icons}#icon-call`}></use>
          </svg>
          38 (098) 12 34 567
        </ContactLink>
        <ContactLink href="tel:+380931234567">
          <svg className={`icon`}>
            <use href={`${icons}#icon-call`}></use>
          </svg>
          38 (093) 12 34 567
        </ContactLink>
      </ContactWrap>
      <ContactWrap>
        <Text>E-mail:</Text>
        <ContactLink href="mailto:office@ecosolution.com">
          <svg className={`icon`}>
            <use href={`${icons}#icon-sms`}></use>
          </svg>
          office@ecosolution.com
        </ContactLink>
      </ContactWrap>
      <ContactWrap>
        <Text>Address:</Text>
        <ContactLink
          href="https://maps.app.goo.gl/mycP6AK2KasvRCQF7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className={`icon`}>
            <use href={`${icons}#icon-map`}></use>
          </svg>
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </ContactLink>
      </ContactWrap>
      <ContactWrap>
        <Text>Social Networks:</Text>
        <SocialWrap>
          <ContactLink
            className="social-link"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={`icon`}>
              <use href={`${icons}#icon-facebook`}></use>
            </svg>
          </ContactLink>
          <ContactLink
            className="social-link"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={`icon`}>
              <use href={`${icons}#icon-instagram`}></use>
            </svg>
          </ContactLink>
        </SocialWrap>
      </ContactWrap>
      <CallbackForm />
    </Section>
  );
};

export default ContactUs;
