import React from "react";
import mobile from "./Images/mobiles.jpg";
import laptop from "./Images/laptops.jpg";
import pant from "./Images/pant.jpg";
import watch from "./Images/watch.jpg";
import shirt from "./Images/shirt.jpg";
import shoes from "./Images/shoes.jpg";
import sport from "./Images/football.jpg";
import grocery from "./Images/grocery.jpg";
import bag from "./Images/bag.jpg";
import { Link } from "react-router-dom";

function ZeroList() {
  const List = [
    {
      name: "mobiles",
      image: mobile,
    },
    {
      name: "Laptops",
      image: laptop,
    },
    {
      name: "Watches",
      image: watch,
    },
    {
      name: "Sports",
      image: sport,
    },
    {
      name: "Pants",
      image: pant,
    },
    {
      name: "Shirts",
      image: shirt,
    },
    {
      name: "Footwear",
      image: shoes,
    },
    {
      name: "Grocery",
      image: grocery,
    },
    {
      name: "Bag",
      image: bag,
    },
  ];

  return (
    <>
    <div className="flex w-full mt-[56px] bg-white fixed z-20 test2">
      {List.map(({ name, image }) => {
        return (
         <Link to={"/"+name}>
           <div className="mb-3 ml-2">
            <div className="border-4 border-2 border-blue-500 test duration-300 mt-4  rounded-[50%] h-32 w-32 mx-4 flex flex-col justify-center items-center ">
           <img className="rounded-[50%] border-[4px] border-[#FFC220]  h-32 w-32 hover:scale-110 duration-500" src={image} alt="image"/>
          
          </div>
          <h1 className="font-semibold ml-[52px] text-blue-500 ">{name}</h1>
          </div>
         </Link>
        );
      })}
    </div>
    <h1 className="bg-slate-200 h-[1px] m-6"></h1>
    </>
  );
}

export default ZeroList;
