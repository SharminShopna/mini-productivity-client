import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import banner1 from '../assets/logo/w2.png';
import banner2 from '../assets/logo/ss1.png';
import banner3 from '../assets/logo/ss2.png';

const Banner = () => {
  const bannerImages = [banner1, banner2, banner3];

  return (
    <div className="w-full h-[400px] md:h-[500px] overflow-hidden shadow-lg mt-[86px] md:mt-[92px] mb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {bannerImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-[400px] md:h-[500px] bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className=" bg-opacity-40 w-full h-full flex items-center justify-center text-teal-500 text-4xl font-bold text-center px-4">
                Stay Productive & Achieve Your Goals
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
