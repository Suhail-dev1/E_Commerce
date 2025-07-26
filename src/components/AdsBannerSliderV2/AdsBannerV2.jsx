import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import BannerBox from '../BannerBox/BannerBox';
import BannerBoxV2 from '../BannerBoxV2/BannerBoxV2';

const AdsBannerV2 = (props) => {
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
                <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" } alt="banner" Link={'/'}/>
              </SwiperSlide>
             <SwiperSlide>
                 <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" } alt="banner" Link={'/'}/>
              </SwiperSlide>
              <SwiperSlide>
                 <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" } alt="banner" Link={'/'}/>
              </SwiperSlide>
              <SwiperSlide>
                {/* <BannerBox img={'/banner3.jpg'} Link={'/'}/> */}
                 <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" } alt="banner" Link={'/'}/>
              </SwiperSlide>
            <SwiperSlide>
                 <BannerBoxV2 info="left" image={"https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg" } alt="banner" Link={'/'}/>
              </SwiperSlide>
    </Swiper>
    </div>
    </>
  )
}

export default AdsBannerV2;