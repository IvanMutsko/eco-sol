import styled from 'styled-components';

export const Wrap = styled.div`
  max-width: 480px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;

    padding-left: 96px;
    padding-right: 96px;
  }
`;
