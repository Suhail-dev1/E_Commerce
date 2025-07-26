import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import BannerBox from '../BannerBox/BannerBox';

const AdsBanner = (props) => {
  return (
    <>
    <div className='py-5 w-full'>
         <Swiper
              slidesPerView={props.itmes}
              spaceBetween={30}
              modules={[Navigation]}
              navigation = {true}
              className="smlBtn"
            >
              <SwiperSlide>
                <img src="https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp" class="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner" Link={'/'}/>
              </SwiperSlide>
             <SwiperSlide>
                <img src="https://serviceapi.spicezgold.com/download/1741669037986_banner2.webp" class="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner" Link={'/'}/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://serviceapi.spicezgold.com/download/1741669057847_banner5.webp" class="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner" Link={'/'}/>
              </SwiperSlide>
              <SwiperSlide>
                {/* <BannerBox img={'/banner3.jpg'} Link={'/'}/> */}
                <img src="https://serviceapi.spicezgold.com/download/1742453755529_1741669087880_banner6.webp" class="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner"Link={'/'}/>
              </SwiperSlide>
            <SwiperSlide>
                <img src="https://serviceapi.spicezgold.com/download/1741669012402_banner1.webp" class="w-full transition-all group-hover:scale-105 group-hover:rotate-1" alt="banner" Link={'/'}/>
              </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default AdsBanner