import { Swiper, SwiperSlide } from 'swiper/react';

const SimpleSlider = ({ children }) => {
  return (
    <div>
      <Swiper spaceBetween={16} slidesPerView={2.2}>
        {children.map((el, idx) => (
          <SwiperSlide
            key={`${JSON.stringify(el.props.children[0].props)}_${idx}`}
          >
            {el}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleSlider;
