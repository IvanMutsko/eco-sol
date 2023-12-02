import styled from 'styled-components';

import topImg from '../../assets/images/values/wind-farms-fields.jpg';
import bottomImg from '../../assets/images/values/man-worker-firld-by-solar-panels.jpg';

export const Wrap = styled.div`
  display: flex;
  align-items: stretch;
  align-content: flex-start;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 24px;
  }

  & .div1 {
    @media screen and (min-width: 768px) {
      grid-area: 1 / 1 / 2 / 2;
    }
  }
  & .div2 {
    @media screen and (min-width: 768px) {
      grid-area: 1 / 2 / 2 / 3;
    }
  }
  & .div3 {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;

      grid-area: 1 / 3 / 2 / 5;
      background:
        url(${topImg}),
        lightgray 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  & .div4 {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;

      grid-area: 2 / 1 / 3 / 3;
      background:
        url(${bottomImg}),
        lightgray 50%;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }
  & .div5 {
    @media screen and (min-width: 768px) {
      grid-area: 2 / 3 / 3 / 4;
    }
  }
  & .div6 {
    @media screen and (min-width: 768px) {
      grid-area: 2 / 4 / 3 / 5;
    }
  }
`;

export const Card = styled.div`
  width: 148px;

  padding: 13px 12px;
  background: #eaedf1;

  @media screen and (min-width: 768px) {
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    padding: 48px 24px;
  }
`;

export const Value = styled.h3`
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  text-transform: uppercase;

  padding-bottom: 33px;

  & .icon {
    width: 16px;
    height: 16px;
    stroke: #173d33;
    fill: none;
    margin-right: 5px;
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: #97d28b;
`;

export const Text = styled.p`
  padding-top: 12px;

  text-align: justify;
  font-size: 14px;
  letter-spacing: -0.56px;
`;
