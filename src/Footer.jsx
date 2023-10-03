import React from "react";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import { FcLeft,FcRight } from "react-icons/fc";
import { BsGithub, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-20">
      <div className="border-2 h-20 -mb-1 bg-slate-300 flex items-center justify-around">
        <div className="font-semibold text-gray-700">
          <h1> Gmail : SarojKumar@gmail.com</h1>
          <h1>Mobile : 8638316090</h1>
        </div>
        <div className="font-bold text-gray-700"> 
        <FcLeft className="inline text-2xl -mt-[1px]"/> Developed by ❤️ Saroj Kumar <FcRight className="inline text-2xl -mt-[1px]"/></div>
        <div className="flex text-4xl text-gray-700">
          <BsGithub className="mx-2 " />
          <BsFacebook className="mx-2" />
          <BsInstagram className="mx-2 rounded-xl" />
          <BsLinkedin className="mx-2 rounded-2xl" />
        </div>
      </div>
      <div className="border-2 flex justify-around h-56 items-center bg-[#0071DC]">
        <div className="flex mt-6 relative -left-16">
          <h1 className="font-bold text-white text-lg relative  -top-6 left-[120px]">
            Our products
          </h1>
          <ul className="text-white ">
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1 " /> Mobiles
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Laptops
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Grocery
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Sports
            </li>
          </ul>
          <ul className="text-white ">
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Mobiles
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Laptops
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Grocery
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Sports
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-white text-lg">Locations</h1>
          <ul className="text-white ">
            <li className="m-1 ">
              <BiSolidRightArrowCircle className="inline -mt-1 mr-1" />
              Lovely Professional University
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Phagwara,
              (Punjab)
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> 1444111
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Near to
              Jalandhar
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-white text-lg">Our Results</h1>
          <ul className="text-white ">
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1 mr-1" />
              Awarded by National Awards
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> #3
              Ecommerce-site
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Everything at
              one place
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1 mr-1" />
              More than 5 millions + users
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-white text-lg">Our Physical Stores</h1>
          <ul className="text-white ">
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1 mr-1" />
              Jalandhar
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Patna
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1" /> Banglore
            </li>
            <li className="m-1">
              <BiSolidRightArrowCircle className="inline -mt-1 mr-1" />
              Hydrabad
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
