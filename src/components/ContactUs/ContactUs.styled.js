import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 36px;
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  padding-bottom: 16px;
`;

export const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Text = styled.p``;

export const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 20px;
  letter-spacing: -0.8px;

  & .icon {
    margin-right: 8px;
    width: 24px;
    height: 24px;
    stroke: #173d33;
    fill: transparent;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  gap: 8px;

  & .social-link {
    padding: 12px;

    & .icon {
      margin-right: 0;
    }
  }
`;
