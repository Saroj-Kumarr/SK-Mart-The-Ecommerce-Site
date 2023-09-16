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

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function BodyFirst() {
  return (
    <div className="flex p-4">
      <div>
        <div className="h-60 w-80 ">
          <img className="rounded-2xl opacity-80" src={boy} alt="boy-image" />

          <div className="absolute top-44 m-2">
            <h1 className="font-bold text-3xl">Fits that hit</h1>
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
            className="w-[320px] h-[500px] opacity-80 rounded-2xl border-2"
            alt="footerwear"
          />
        </div>
        <div className="h-52">
          <div className="relative top-8">
            <img
              className="rounded-2xl border-2 opacity-80 h-56 w-80"
              src="https://www.luckyfurniture.in/wp-content/uploads/2018/07/dining-table-18.jpg"
              alt="boy-image"
            />

            <div className="absolute top-1 left-2">
              <h1 className="font-bold text-2xl">
                Your super host <br />
                tabletop{" "}
                <a
                  href="#"
                  className="font-normal text-base border-2 bg-white p-1 rounded-xl font-semibold"
                >
                  See more
                </a>
              </h1>
            </div>
          </div>
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
              <img className="opacity-80" src={productFour} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opacity-80" src={productTwo} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opacity-80" src={productEight} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opacity-80" src={productEleven} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opacity-80" src={productTen} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opacity-80" src={productFive} alt="first" />
            </SwiperSlide>
            <SwiperSlide>
              <img className="opacity-80" src={productSix} alt="first" />
            </SwiperSlide>

            <SwiperSlide>
              <img className="opacity-80" src={productEight} alt="first" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex relative left-4 top-32">


            <div >
           <img className=" w-[95%]  border-2 rounded-xl"  src="https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?w=2000" alt="iphone" />

            <div className="absolute top-8 left-2">
            <h1 className="text-2xl font-bold ">Flash Deals </h1>
           <a href="#" className="underline ">Shop now</a>
            </div>

            </div>


            <div>
            <img className=" w-[95%]  border-2 rounded-xl"  src="https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?w=2000" alt="iphone" />

            <div className="absolute top-8 left-[410px]">
            <h1 className="text-2xl font-bold ">Flash Deals </h1>
           <a href="#" className="underline ">Shop now</a>
            </div>

            
           
            </div>
          <div>

          </div>

        </div>
        <div className="relative top-32 ">
          Testing...
        </div>
      </div>
      <div>
        <div>
          <img className="rounded-2xl opacity-80" src={girl} alt="girl-image" />

          <div className="absolute top-44 m-2">
            <h1 className="font-bold text-2xl">
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
            className="w-[320px] h-[500px] opacity-80 rounded-2xl"
            alt="footerwear"
          />
        </div>
        <div className="relative top-16">
          <img className="rounded-2xl h-52 opacity-80" src="https://media.wired.com/photos/6495f3af2cc57777ec67f0ed/16:9/w_2400,h_1350,c_limit/bellroy-tokyo-work-bag-source-bellroy-Gear.jpg" alt="girl-image" />

          <div className="absolute top-1 left-1">
            <h1 className="font-bold text-2xl ">
              Everything in its <br />
              place
            </h1>
            <a href="#" className="underline ">
              Show More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BodyFirst;
