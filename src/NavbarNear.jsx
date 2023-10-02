import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoHome } from "react-icons/go";

function NavbarNear() {
  return (
    <div className="flex z-20 p-2 bg-[#0071DC] box-border m-0 border-t text-white fixed w-full mt-16">
      <div className="flex ">
        <img
          className="h-6 w-6 mx-1"
          src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png"
          alt="mobile-icon"
        />  
        <h1 className="mx-1">How do you want your items?</h1>
        <select className="bg-[#0071DC]"></select>
      </div>
      <div >
        <ul className="flex font-semibold">
          <li className="ml-2 font-normal"> <CiLocationOn className="inline mb-1 relative left-[2px]" /> Sacramento, 95829</li>

          <li className="ml-2 font-normal"><GoHome className="inline mb-1 ml-1"/>  Sacramento Supercenter</li>

          <li className="ml-2">Deals</li>
          <li className="ml-2">Grocery & Essentials</li>
          <li className="ml-2">Walmart Style</li>
          <li className="ml-2">Halloween</li>
          <li className="ml-2">Baby Days</li>
          <li className="ml-2">Tailgating</li>
          <li className="ml-2">Fashion</li>
          <li className="ml-2">Home</li>
          <li className="ml-2">Registry</li>
          <li className="ml-2">ONE Debit</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarNear;
