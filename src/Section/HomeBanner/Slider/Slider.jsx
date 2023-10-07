import { Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/virtual';
import { useState } from 'react';
import { Controller } from 'swiper/modules';
import { MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
const Slider = () => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const array = [
        'https://i.ibb.co/cr1gmCp/markus-spiske-WUeh-Agq-O5h-E-unsplash.jpg',
        'https://i.ibb.co/cLdTDgj/j-schiemann-Z4-Sxy1-3wd-Y-unsplash.jpg',
        'https://i.ibb.co/vBgdGTM/full-shot-boy-kicking-yellow-ball.jpg',
        // 'https://i.ibb.co/4VVf7fn/3925738-13034.jpg',
        'https://i.ibb.co/rFFhmfD/gentrit-sylejmani-Jj-Uyj-E-o-Eb-M-unsplash.jpg',
    ]
    console.log(array[0])
    // const slides = Array.from({ length: 1000 }).map(
    //     (el, index) => `Slide ${index + 1}`
    //   );
  return (
    <div>

      <Swiper modules={[Virtual]} spaceBetween={0}  slidesPerView={1} virtual>
      {array.map((slideContent, index) => (
        <SwiperSlide key={slideContent} virtualIndex={index}>
          {/* {slideContent} */}
        <img src={slideContent} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
        {/* Main Swiper -> pass controlled swiper instance */}
        <Swiper modules={[Controller]} controller={{ control: controlledSwiper }} >
        <MdArrowBackIosNew/>
          {/*...*/}
        </Swiper>

        {/* Controlled Swiper -> store swiper instance */}
        <Swiper modules={[Controller]} onSwiper={setControlledSwiper}>
          {/* ... */}
          <MdArrowForwardIos/>
        </Swiper>
    </div>
  );
};

export default Slider;
