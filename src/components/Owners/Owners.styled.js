import styled from 'styled-components';

export const CardWrap = styled.div``;

export const Image = styled.img`
  height: 168px;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  font-size: 18px;
  letter-spacing: -0.72px;

  & .position {
    color: #828382;
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
