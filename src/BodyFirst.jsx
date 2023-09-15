import React from "react";
import boy from './Images/boy.jpg';
import girl from './Images/girl.jpg';
import producOne from './Images/product-1.jpg';
import producTwo from './Images/product-2.jpg';
import producThree from './Images/product-3.jpg';
import producFour from './Images/product-4.jpg';
import producFive from './Images/product-5.jpg';
import producSix from './Images/product-6.jpg';


import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function BodyFirst() {
  return (
    <div className="flex p-4">
      <div >
        <div className="h-60 w-80 " >
            <img className="rounded-2xl" src={boy} alt="boy-image"/>

           <div className="absolute top-44 m-2">
            <h1 className="font-bold text-3xl">Fits that hit</h1>
            <a href="#" className="underline ml-2 relative top-2">Shop men's</a>
           </div>

        </div>
        <div>2</div>
        <div>3</div>
      </div>
      <div className="mx-4 slider-main-container w-[55%]"> 
        <div className="slider-container h-[350px]">
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={producOne} alt="first"/>

        </SwiperSlide>
        <SwiperSlide> <img className="h-[full] w-[full]" src={producTwo} alt="first"/></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
      </Swiper>

        </div>
        <div>2</div>
        <div>3</div>
      </div>
      <div>
        <div>

        <img className="rounded-2xl" src={girl} alt="girl-image"/>

<div className="absolute top-44 m-2">
 <h1 className="font-bold text-2xl">Bold moves, <br/>Style grooves</h1>
 <a href="#" className="underline ml-2 relative top-2">Shop women's</a>
</div>



        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </div>
  );
}

export default BodyFirst;
