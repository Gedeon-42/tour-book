import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../assets/images/slider.json"
import { sliderSettings } from "../../utils/common.jsx";
import "swiper/css";
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
function Offers() {
  return (
    <div className='offer-wrapper'>
 <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="r-card">
                <img src={card.image} alt="" />
                <div className="r-content">
                  
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    </div>
  )
}

export default Offers
const SliderButtons = () => {
    const swiper = useSwiper();
    return (
      <div className="r-buttons">
        <button onClick={() => swiper.slidePrev()}>
          <FaAngleLeft />
        </button>
        <button onClick={() => swiper.slideNext()}>
          <FaAngleRight />
        </button>
      </div>
    );
  };