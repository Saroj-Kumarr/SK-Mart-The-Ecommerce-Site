import './BodyFirst.css';
import React from "react";
import boy from "./Images/boy.jpg";
import girl from "./Images/girl.jpg";
import productOne from "./Images/product-1.jpg";
import productTwo from "./Images/product-2.jpg";
import productThree from "./Images/product-3.jpg";
import productFour from "./Images/product-4.jpg";
import productFive from "./Images/product-5.jpg";
import productSix from "./Images/product-6.jpg";
import productSeven from "./Images/product-7.jpg";
import productEight from "./Images/product-8.jpg";
import productTen from "./Images/product-10.jpg";
import productEleven from "./Images/product-11.jpg";
import iphone from "./Images/iphone15.jpg";
import modelwithbag from "./Images/modelwithbag.jpg";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

import { addItem } from './SliceSecond';
import { useDispatch } from 'react-redux';

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function BodyFirst() {

  return (
    <div className="flex p-4 mt-10">
      <div>
        <div className="h-60 w-80 ">
          <img className="rounded-2xl " src={boy} alt="boy-image" />

          <div className="absolute top-44 m-2">
            <h1 className="font-bold text-3xl mt-56">Fits that hit</h1>
            <a href="#" className="underline ml-2 relative top-2">
              Shop men's
            </a>
          </div>
        </div>
        <div className="h-[500px] relative -top-6">
          <span className="relative top-20 left-40 z-10 font-bold text-xl">
            Footwear refresh
          </span>
          <a
            href="#"
            className="relative top-28 border-2 z-10 bg-white  rounded-xl p-1 left-5 font-"
          >
            Explore more
          </a>
          <img
            src="https://media.boohoo.com/i/boohoo/fzz56869_black_xl?$product_image_main_mobile$&fmt=webp"
            className="w-[320px] h-[500px]  rounded-2xl border-2"
            alt="footerwear"
          />
        </div>

        
      </div>
      <div className="mx-4 -mt-[82px] slider-main-container w-[55%]">
        <div className="relative top-32 text-center -left-64 z-10">
          <h1 className=" font-semibold text-teal-600 text-2xl  z-10 ">
            Your Style at Walmart
          </h1>
          <h1 className="font-normal m-2 text-teal-800 text-4xl z-10 ">
            Now Trending
          </h1>
          <button className=" border-2 p-2 border-white rounded-lg font-bold text-white relative top-2  bg-yellow-400">
            See <span className="text-emerald-400">more</span>
          </button>
        </div>

        <div className="slider-container h-[350px] relative -top-[45px]">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img className="" src={productFour} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={productTwo} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={productEight} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={productEleven} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={productTen} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={productFive} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="" src={productSix} alt="first" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="" src={productEight} alt="first" />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="h-[210px]  rounded-2xl border-2 mt-32 mx-4">

          <img className="h-[210px] w-full rounded-2xl" src="https://png.pngtree.com/background/20220714/original/pngtree-flash-sale-banner-picture-image_1606885.jpg" alt="banner" />

        </div>
        
        <div className="relative top-32 left-4 mt-6 ">
          {/* <div className="">
            <img className="w-[97%] h-44 rounded-xl" src="https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=216&odnWidth=794&odnBg=&odnDynImageQuality=70" alt="offer"/>

          </div> */}
        </div>
      </div>
      <div>
        <div>
          <img className="rounded-2xl " src={girl} alt="girl-image" />

          <div className="absolute top-44 m-2">
            <h1 className="font-bold text-2xl mt-56">
              Bold moves, <br />
              Style grooves
            </h1>
            <a href="#" className="underline ml-2 relative top-2">
              Shop women's
            </a>
          </div>
        </div>
        <div className="h-[500px] relative -top-6">
          <span className="relative top-20 left-2 z-10 font-bold text-xl">
            Explore <br />
            outstanding
          </span>
          <a
            href="#"
            className="relative top-28 border-2 z-10 bg-white  rounded-xl p-1 -left-[108px] font-"
          >
            Explore more
          </a>
          <img
            src="https://media.istockphoto.com/id/485374828/photo/in-these-clothes-i-can-feel-femininely.webp?s=2048x2048&w=is&k=20&c=Yvg_09S9XLVH_FGChk0KkM8-c4loxULBggBGhFVRuC4="
            className="w-[320px] h-[500px]  rounded-2xl"
            alt="footerwear"
          />
        </div>
        
      </div>
     
    </div>
  );
}

export default BodyFirst;
