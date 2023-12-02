import { Swiper } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import { cases } from '../../assets/data/slides';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  Image,
  LinkToProject,
  Line,
  Card,
  CardWrap,
  Title,
  Subwrap,
  Text,
  Test,
} from './Slider.styled';
import icons from '../../assets/icons/arr-slide.svg';
import SwiperButtons from './Controller';

const Slider = () => {
  return (
    <Test>
      <Swiper
        modules={[EffectFade, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        effect={'fade'}
        loop={true}
        className="swiper"
      >
        <SwiperButtons length={cases.length} />
        {cases.map(el => (
          <Card key={el.id}>
            <Image src={el.image} alt={el.name} />
            <CardWrap>
              <Subwrap>
                <Title>{el.name}</Title>
                <LinkToProject href="/">
                  <svg className={`icon`}>
                    <use href={`${icons}#icon-arrow-top-right`}></use>
                  </svg>
                </LinkToProject>
              </Subwrap>
              <Line></Line>
              <Subwrap>
                <Text>{el.description}</Text>
                <Text>{el.date}</Text>
              </Subwrap>
            </CardWrap>
          </Card>
        ))}
      </Swiper>
    </Test>
  );
};

export default Slider;
