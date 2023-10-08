import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Mobiles } from "./DataSet";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

function MobileMenu() {
  const [mobileData, setMobileData] = useState(Mobiles);
  const { id } = useParams();
  const [val, setValue] = useState(false);

  function selectItem() {
    if (val == false) {
      setValue(true);
    } else {
      setValue(false);
    }
  }

  const [
    {
      title,
      image,
      price,
      brand,
      rating,
      description,
      ordered,
      ram,
      rom,
      frontCamera,
      backCamera,
      Processor,
      display,
    },
  ] = mobileData;

  function firteredMobiles(id, mobileData) {
    const filteredData = mobileData.filter((obj) => {
      return obj.id == id;
    });

    return filteredData;
  }

  useEffect(() => {
    const data = firteredMobiles(id, mobileData);
    setMobileData(data);
  }, []);

  return (
    <div className="flex h-[78vh] justify-center items-center mt-32 ">
      {mobileData.length == 1 && (
        <div className="test border-4 border-yellow-500 rounded-2xl relative top-12 duration-500 hover:border-blue-500 flex w-[600px]">
          <div className="border-r-2 flex-1 ">
            <img className="h-full rounded-2xl" src={image} alt="mobile" />
          </div>

          <div className="ml-1 mt-2 flex-1 p-1">
            <div
              className="relative -mb-10  h-10 w-10 left-[82%] z-100 text-3xl"
              onClick={selectItem}
            >
              {val == false ? <span>🤍</span> : <span>❤️</span>}
            </div>

            <ul className=" text-white">
              <li className="text-white text-center rounded-lg bg-red-400 w-44 ">
                {title}
              </li>
              <li className="bg-cyan-400 rounded-lg mt-1 w-20">
                <BsCurrencyRupee className="inline -mt-[2px] text-xl" />
                {price}
              </li>
              <li className="bg-green-400 mt-1 w-48 rounded-lg px-1 mt-1">
                {ram} Ram + {rom} Rom
              </li>
              <li className="bg-purple-500 w-32 mt-1 rounded-lg px-1 text-center">
                {display}
              </li>
              <li className="bg-amber-500 rounded-lg w-44 text-center mt-1">
                {frontCamera} (front-camera)
              </li>
              <li className="bg-lime-500 rounded-lg mt-1 w-44 px-1">
                {backCamera} (back-camera)
              </li>
              <li className="rounded-lg bg-fuchsia-500 mt-1 w-28 text-center">
                {Processor}
              </li>
              <li className="border-2 w-20 text-center bg-green-500 text-white rounded-lg mt-1">
                {rating} rating
              </li>
              <li className="bg-slate-500 py-[2px] rounded-lg px-2 mt-1">
                {description}
              </li>
              <li className="bg-teal-500 py-[2px] rounded-lg mt-1 px-1">
                {ordered}
              </li>
            </ul>
            <h1 className="h-[1px] relative bg-slate-400 mt-2"></h1>

            {/* w-full mt-[28px] text-white  p-1 rounded-lg rounded-t-md hover:text-blue-500 duration-500 hover:bg-yellow-500 rounded-b-[10px] bg-blue-400 text-yellow-500 text-center font-bold */}

            <div className="flex justify-around">
              <button className="font-bold bg-blue-500 text-white m-2 hover:text-blue-500 duration-500 hover:bg-yellow-500 rounded-lg px-2">
                Add to cart
              </button>
              <button className="font-bold p-1 bg-blue-500 text-white m-2 hover:text-blue-500 duration-500 hover:bg-yellow-500 rounded-lg px-2">
                Proceed to buy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
