import React  from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-router-dom';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider pt-4 py-8">
      <div className="container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          modules={[Navigation]}
          navigation = {true}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="	https://serviceapi.spicezgold.com/download/1751598295572_fash.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Fashion</h3>
            </div>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Electronics</h3>
            </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Bags</h3>
            </div>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Footwear</h3>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Groceries</h3>
            </div>
            </Link>
          </SwiperSlide>
           <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white  rounded-sm text-center flext items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Beauty</h3>
            </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="	https://serviceapi.spicezgold.com/download/1741661105893_well.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Wellness</h3>
            </div>
            </Link>
          </SwiperSlide>
            <SwiperSlide>
            <Link to = "/">
            <div className="item py-3 px-3 bg-white rounded-sm text-center flext items-center justify-center flex-col">
                <img src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png" alt="logo" />
                <h3 className="text-[15px] font-[500] mt-3">Jewellery</h3>
            </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
