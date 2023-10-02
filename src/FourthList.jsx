import React, { useEffect, useState } from "react";
import CardFirst from "./CardFirst";
import { store } from "./Store";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";
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
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

function FourthList() {
  const [page, setPage] = useState(3);

  const productItems = useSelector((store) => store.products.data);

  function handlePageNext() {
    if (page < 5) setPage(page + 1);
    else setPage(1);
  }

  function handlePagePrev() {
    if (page > 1) setPage(page - 1);
    else setPage(5);
  }

  return (
    <div className="flex mb-10 p-4 mt-4">
      <div className="flex flex-col">
        <h1 className="bg-slate-200 h-[1px] mt-8 mb-4"></h1>
        <div className="flex">
          <button
            onClick={() => {
              handlePagePrev();
            }}
          >
            ◀️
          </button>

          {productItems.length == 0 ? (
            <Shimmer />
          ) : (
            productItems.slice(page * 3 - 3, page * 3).map((obj) => {
              return (
                <CardFirst
                  image={obj.images[0]}
                  title={obj.title}
                  price={obj.price}
                  rating={obj.rating}
                  key={obj.id}
                />
              );
            })
          )}
          <button
            onClick={() => {
              handlePageNext();
            }}
          >
            ▶️
          </button>
        </div>
        <h1 className="bg-slate-200 h-[1px] mt-8 mb-4"></h1>
      </div>

      <div className=" ml-10 w-[600px] h-[400px] rounded-lg">
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
    </div>
  );
}

export default FourthList;
