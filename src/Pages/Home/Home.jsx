import React from "react";
import HomeSlider from "../../components/HomeSlider/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBanner from "../../components/AdsBannerSlider/AdsBanner";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules"; // ✅ not from "swiper" directly

import "swiper/css"; // ✅ required core styles
import "swiper/css/navigation"; // ✅ required for navigation arrows

import BolgItems from "../../components/BlogItems/BolgItems";
import HomeSliderV2 from "../../components/HomeSliderV2/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2/BannerBoxV2";
import AdsBannerV2 from "../../components/AdsBannerSliderV2/AdsBannerV2";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <HomeSlider />

      <section className="py-6">
        <div className="container flex gap-4">
          <div className="part1 w-[65%]">
            <HomeSliderV2 />
          </div>
          <div className="part2 w-[35%] flex items-center gap-5 justify-between flex-col">
            <BannerBoxV2
              info="left"
              image={
                "https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
              }
            />
            <BannerBoxV2
              info="right"
              image={
                "https://serviceapi.spicezgold.com/download/1741664496923_1737020250515_New_Project_47.jpg"
              }
            />
          </div>
        </div>
      </section>
      <HomeCatSlider />

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftsec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[500]">
                DO not miss the current offers untill the end of Jun.
              </p>
            </div>
            <div className="rightSec w-[50%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="FASHION" />
                <Tab label="ELECTRONICS" />
                <Tab label="BAGS" />
                <Tab label="FOOTER" />
                <Tab label="GROCERIES" />
                <Tab label="BEAUTY" />
                <Tab label="WELLESS" />
                <Tab label="JEWELLEY" />
              </Tabs>
            </div>
          </div>
          <ProductsSlider itmes={6} />
        </div>
      </section>

      <section className="py-4 pt-2 bg-white ">
        <div className="container">
          <div className="freeshipping w-[80%] m-auto  py-3 p-4 border-2 border-[red] flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <FaShippingFast className="text-[50px] " />
              <span className="text-[20px] font-[600] text-uppercase">
                Free Shoping
              </span>
            </div>

            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On First Order and Over $200
              </p>
            </div>
            <p className="font-bold text-[25px]"> only $200</p>
          </div>
          <AdsBannerV2 itmes={4} />
        </div>
      </section>

      <section className="py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider itmes={6} />

          <AdsBanner itmes={3} />
        </div>
      </section>

      <section className="py-5 pt-0">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider itmes={6} />
          <AdsBanner itmes={3} />
        </div>
      </section>

      <section className="py-5 pt-0 pb-8 bg-white blogSection">
        <div className="container">
          <h2 className="text-[20px] font-[600] mb-4">From The Blog</h2>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            modules={[Navigation]}
            navigation={true}
            className="blogSlider"
          >
            <SwiperSlide>
              <BolgItems />
            </SwiperSlide>
            <SwiperSlide>
              <BolgItems />
            </SwiperSlide>
            <SwiperSlide>
              <BolgItems />
            </SwiperSlide>
            <SwiperSlide>
              <BolgItems />
            </SwiperSlide>
            <SwiperSlide>
              <BolgItems />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Home;
