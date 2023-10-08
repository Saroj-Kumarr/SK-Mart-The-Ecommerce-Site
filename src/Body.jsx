import React from "react";
import BodyFirst from "./BodyFirst";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
import ThirdList from "./ThirdList";
import FourthList from "./FourthList";
import FifthList from "./FifthList";
import Shimmer from "./Shimmer";

function Body() {
  return (
    <div className="mt-8 relative top-60 ">
      <BodyFirst />
      <FirstList />
      <SecondList />
      <ThirdList />
      <FourthList />
      <FifthList />
      
    </div>
  );
}

export default Body;
