import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  height: 39px;
  padding: 4px 4px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
  background-color: transparent;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.125;
  letter-spacing: -0.64px;

  border-radius: 500px;
  border: 1px solid #97d28b;
`;

export const Circle = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;

  color: #173d33;
  font-size: 16px;

  border-radius: 100px;
  background: #97d28b;
`;
