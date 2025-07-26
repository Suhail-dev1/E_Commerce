import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

// Swiper core and styles
import "swiper/css";
import "swiper/css/navigation";

// Import required modules
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const zoomSliderBig = useRef();
  const zoomSliderSml = useRef();

  const goto = (index) => {
    setSlideIndex(index);
    zoomSliderSml.current.swiper.slideTo(index);
    zoomSliderBig.current.swiper.slideTo(index);
  };

  return (
    <div className="flex gap-3">
      <div className="slider w-[15%]">
        <Swiper
          ref={zoomSliderSml}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={10}
          modules={[Navigation]}
          navigation={true}
          className="zoomProductSliderThumbs h-[500px] overflow-hidden"
        >
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 0 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => goto(0)}
            >
              <img
                src="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 1 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => goto(1)}
            >
              <img
                src="/1742439426968_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 2 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => goto(2)}
            >
              <img
                src="/1742439426970_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 3 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => goto(3)}
            >
              <img
                src="/1742439426970_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 4 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => goto(4)}
            >
              <img
                src="/1742439426968_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
                className="w-full transition-all group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      <div className="zoomContainer w-[80%] h-[470px] overflow-hidden rounded-md">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
        >
          <SwiperSlide>
            <InnerImageZoom
              src="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              // zoomSrc="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              zoomType="hover"
              zoomScale={2}
              // zoomPreload={true}
              // Zoom
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="/1742439426968_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
              // zoomSrc="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              zoomType="hover"
              zoomScale={2}
              // zoomPreload={true}
              // Zoom
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="/1742439426970_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
              // zoomSrc="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              zoomType="hover"
              zoomScale={2}
              // zoomPreload={true}
              // Zoom
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="/1742439426970_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"
              // zoomSrc="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              zoomType="hover"
              zoomScale={2}
              // zoomPreload={true}
              // Zoom
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              src="/1742439426968_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-2-202403231855.jpg"
              // zoomSrc="/1742439426966_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg"
              zoomType="hover"
              zoomScale={2}
              // zoomPreload={true}
              // Zoom
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
