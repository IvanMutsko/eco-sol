import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 36px;
`;

export const Title = styled.h2`
  font-family: 'Oswald', sans-serif;
  font-size: 28px;
  font-weight: 400;
  line-height: 28px;
  text-transform: uppercase;
  padding-bottom: 16px;
`;

export const Line = styled.div`
  width: 100%;
  background: #97d28b;
  height: 1px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 36px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const CardWrap = styled.div`
  display: flex;
  gap: 8px;
  padding-top: 16px;
`;

export const CardTitle = styled.h3`
  text-align: justify;
  font-weight: 400;
  letter-spacing: -0.72px;
`;

export const CardText = styled.p`
  text-align: justify;
  font-size: 14px;
  letter-spacing: -0.56px;
  padding-top: 16px;

  display: none;

  &.show {
    display: block;
  }
`;

export const CardButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  text-align: center;
  font-size: 18px;
  letter-spacing: -0.72px;
  margin-bottom: 12px;
`;

export const NavigateLink = styled(Link)`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: inherit;

  font-size: 16px;
  letter-spacing: -0.64px;

  background: #97d28b;
  border: 1px solid #97d28b;
  border-radius: 500px;

  & .icon {
    fill: #173d33;
    font-size: 18px;
  }
`;
