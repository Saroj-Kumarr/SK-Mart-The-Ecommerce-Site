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

function ZeroList() {
  const List = [
    {
      name: "Mobiles",
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
    <div className="flex m-6">
      {List.map(({ name, image }) => {
        return (
          <div>
            <div className="border-2 mt-20  duration-300  rounded-[50%] h-32 w-32 mx-4 flex flex-col justify-center items-center ">
           <img className="rounded-[50%] border-[4px] border-[#FFC220]  h-32 w-32 hover:scale-110 duration-500" src={image} alt="image"/>
          
          </div>
          <h1 className="font-semibold ml-[52px] text-blue-500 ">{name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default ZeroList;
