import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { GoHome } from "react-icons/go";

function NavbarNear() {
  return (
    <div className="flex p-2 bg-[#0071DC] box-border m-0 border-t text-white">
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
          <li className="ml-3 font-normal"> <CiLocationOn className="inline mb-1 relative left-[2px]" /> Sacramento, 95829</li>

          <li className="ml-3 font-normal"><GoHome className="inline mb-1 ml-1"/>  Sacramento Supercenter</li>

          <li className="ml-3">Deals</li>
          <li className="ml-3">Grocery & Essentials</li>
          <li className="ml-3">Walmart Style</li>
          <li className="ml-3">Halloween</li>
          <li className="ml-3">Baby Days</li>
          <li className="ml-3">Tailgating</li>
          <li className="ml-3">Fashion</li>
          <li className="ml-3">Home</li>
          <li className="ml-3">Registry</li>
          <li className="ml-3">ONE Debit</li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarNear;
