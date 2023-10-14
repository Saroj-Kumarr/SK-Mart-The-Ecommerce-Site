import React from "react";
import BodyFirst from "./BodyFirst";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
import ThirdList from "./ThirdList";
import FourthList from "./FourthList";
import FifthList from "./FifthList";
import Shimmer from "./Shimmer";
import Signin from "./Signin";
import Signup from "./Signin";

function Body() {
  return (
    <div className="mt-8">
      <BodyFirst />
      <FirstList />
      <SecondList />
      <ThirdList />
      <FourthList />
      <FifthList />
      {/* <Signup/>
      <Signin /> */}
    </div>
  );
}

export default Body;
