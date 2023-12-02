import styled from 'styled-components';

import bc from '../../assets/images/Energy.png';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;

  padding-bottom: 36px;
`;

export const Title = styled.h2`
  color: #173d33;
  text-align: center;
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
`;

export const Line = styled.div`
  width: 1px;
  height: 48px;
  background: #97d28b;
`;

export const Text = styled.p`
  background: #eaedf1;
  padding: 52px 18px;

  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 36px;
  text-transform: uppercase;
`;

export const List = styled.ul`
  width: 100%;

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  background: url(${bc});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Item = styled.li`
  font-size: 20px;
  letter-spacing: -0.8px;
`;
