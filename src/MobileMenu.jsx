import React, { useEffect } from "react";
import { useParams } from "react-router";
import { Mobiles } from "./DataSet";
import { useState } from "react";

function MobileMenu() {
  const [mobileData, setMobileData] = useState(Mobiles);
  const { id } = useParams();

  const [{title,image,price,brand,rating,description,ordered,ram,rom,frontCamera,backCamera,Processor,display,}]=mobileData;


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
    <div className="flex h-[80vh] justify-center border-4 border-black items-center mt-20">
      {mobileData.length == 1 && (
        <div>
          <h1>{image}</h1>
          <h1>{title}</h1>
          <h1>{price}</h1>
          <h1>{brand}</h1>
          <h1>{rating}</h1>
          <h1>{description}</h1>
          <h1>{ordered}</h1>
          <h1>{ram}</h1>
          <h1>{rom}</h1>
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
