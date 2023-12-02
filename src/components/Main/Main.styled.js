import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.h1`
  width: 320px;

  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;
`;

export const Text = styled.p`
  text-align: justify;

  & span {
    color: #97d28b;
    font-weight: 500;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
  height: 1px;
  background: #97d28b;
`;

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

export const Link = styled.a`
  color: inherit;
`;

export const Image = styled.img`
  height: 200px;
  object-fit: cover;
`;

export const Subtitle = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
`;
