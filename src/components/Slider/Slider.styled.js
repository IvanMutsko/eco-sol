import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';

export const ControlWrap = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  & .icon {
    width: 16px;
    height: 16px;
    stroke: #173d33;
    fill: none;
    margin-right: 5px;
  }
`;

export const Card = styled(SwiperSlide)`
  background: #eaedf1;
  height: 318px;
`;

export const CardWrap = styled.div`
  padding: 24px 12px 12px 12px;
`;

export const Image = styled.img`
  height: 168px;
  width: 100%;
  object-fit: cover;
`;

export const Subwrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  width: 175px;
  text-align: justify;
  font-size: 18px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  padding-bottom: 24px;
`;

export const Counter = styled.p`
  font-size: 28px;
  font-weight: 300;
  letter-spacing: -1.12px;

  & span {
    color: rgba(23, 61, 51, 0.25);
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  gap: 12px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 15px;
  border-radius: 50%;
  border: 1px solid #173d33;
  background-color: transparent;

  & .icon {
    width: 36px;
    height: 36px;
    margin: 0;
  }
`;

export const LinkToProject = styled.a`
  display: inline-flex;
  padding: 16px;
  width: 60px;
  height: 60px;
  align-items: flex-start;
  border-radius: 100px;
  background: #97d28b;

  & .icon {
    stroke: #173d33;
    fill: none;

    width: 28px;
    height: 28px;
  }
`;

export const Line = styled.div`
  height: 1px;
  background: #97d28b;
`;

export const Text = styled.p`
  padding-top: 12px;
  font-size: 12px;
  letter-spacing: -0.48px;
`;

export const Test = styled.div`
  & .swiper {
    display: flex;
    flex-direction: column-reverse;
    gap: 19px;
  }
`;
