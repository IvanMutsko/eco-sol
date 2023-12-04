import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-bottom: 36px;
`;

export const Title = styled.h2`
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  padding-bottom: 16px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  background-color: #eaedf1;
  height: 116px;

  &:hover {
    background-color: #173d33;
    color: #f3f5fa;
  }
`;

export const Text = styled.p`
  text-align: justify;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: -0.64px;
  margin-bottom: 14px;
`;

export const Subwrap = styled.div`
  display: flex;
  height: 46px;
  align-items: center;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;
