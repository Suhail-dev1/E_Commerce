import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Autoplay } from "swiper/modules";

const HomeSlider = () => {
  return (
    <>
      <div className="homeSlider py-3">
        <div className="container">
          <Swiper
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="sliderHome                                                "
          >
            <SwiperSlide>
              <div className="items rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1751685183248_NewProject(6).jpg	"
                  alt="Confident redhead girl"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
                  alt="Confident redhead girl"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1748955908049_NewProject(13).jpg"
                  alt="Confident redhead girl"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="items rounded-[20px] overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1751685200593_1721277298204_banner.jpg"
                  alt="Confident redhead girl"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
