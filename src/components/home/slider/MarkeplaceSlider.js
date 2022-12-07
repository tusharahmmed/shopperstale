import React from "react";
import "./MarketplaceSlider.css";
import SliderItem from "./SliderItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import CustomItem from "./CustomItem";

const MarkeplaceSlider = ({ sites }) => {
  return (
    <div>
      <Swiper
        className="marketplace-slider animate__animated animate__fadeIn"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={4}
        onSlideChange={() => {}}
        onSwiper={(swiper) => {}}
        breakpoints={{
          // when window width is >= 100px
          100: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 600px
          600: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // when window width is >= 650px
          650: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 900px
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1200px
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window width is >= 1600px
          1600: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {sites.map((item) => (
          <SwiperSlide key={item._id}>
            <SliderItem data={item} />
          </SwiperSlide>
        ))}
        <SwiperSlide>
          <CustomItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MarkeplaceSlider;
