import { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';

import addZero from '../../utils/addZerro';

import { ControlWrap, Counter, ButtonWrap, Button } from './Slider.styled';

import icons from '../../assets/icons/arr-slide.svg';

const SwiperButtons = ({ length }) => {
  const [active, setActive] = useState(null);
  const swiper = useSwiper();

  useEffect(() => {
    setActive(swiper.realIndex + 1);
  }, [swiper.realIndex]);

  return (
    <ControlWrap>
      <Counter>
        {addZero(active)} <span>/{addZero(length)}</span>
      </Counter>
      <ButtonWrap>
        <Button
          type="button"
          onClick={() => {
            swiper.slidePrev();
            setActive(swiper.realIndex + 1);
          }}
        >
          <svg className={`icon`}>
            <use href={`${icons}#icon-arrow-left`}></use>
          </svg>
        </Button>
        <Button
          type="button"
          onClick={() => {
            swiper.slideNext();
            setActive(swiper.realIndex + 1);
          }}
        >
          <svg className={`icon`}>
            <use href={`${icons}#icon-arrow-right`}></use>
          </svg>
        </Button>
      </ButtonWrap>
    </ControlWrap>
  );
};

export default SwiperButtons;
