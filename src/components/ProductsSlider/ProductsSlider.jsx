import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import Productsitems from "../ProductsItems/Productsitems";

const ProductsSlider = (props) => {
  return (
    <>
      <div className="productsSlider py-5">
        <Swiper
         slidesPerView={props.items || 6}
          spaceBetween={5}
          modules={[Navigation]}
          navigation={true}
          className="mySwiper  "
        >
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
          <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
            <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
            <SwiperSlide>
            <Productsitems />
          </SwiperSlide>
        </Swiper>
        
      </div>
    </>
  );
};

export default ProductsSlider;
