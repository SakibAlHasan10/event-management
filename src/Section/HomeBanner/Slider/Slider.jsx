import { Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Slider = () => {
  const array = [
    "https://i.ibb.co/cLdTDgj/j-schiemann-Z4-Sxy1-3wd-Y-unsplash.jpg",
    "https://i.ibb.co/cr1gmCp/markus-spiske-WUeh-Agq-O5h-E-unsplash.jpg",
    "https://i.ibb.co/vBgdGTM/full-shot-boy-kicking-yellow-ball.jpg",
    "https://i.ibb.co/rFFhmfD/gentrit-sylejmani-Jj-Uyj-E-o-Eb-M-unsplash.jpg",
  ];
  return (
    <div className="">
      
      <Swiper
        modules={[Navigation, Virtual, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        virtual
        
      >
        {array.map((slideContent, index) => (
          <SwiperSlide key={slideContent} virtualIndex={index}>
            <img
              src={slideContent}
              alt=""
              style={{ width: "100%", height: "85vh", zIndex:0 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
