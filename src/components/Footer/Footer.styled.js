import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 58px;
`;

export const Line = styled.div`
  height: 1px;
  background-color: #97d28b;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavigateLink = styled(Link)`
  display: inline-flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 32px;

  background-color: #97d28b;
  border-radius: 50%;
  border: none;

  & .icon {
    fill: #173d33;
    font-size: 18px;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;
export const SocialLink = styled.a`
  display: block;
  & .icon {
    width: 30px;
    height: 30px;
    stroke: #173d33;
    fill: transparent;
  }
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const ContactLink = styled.a`
  display: block;
`;
